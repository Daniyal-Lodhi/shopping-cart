import express from "express" ;
import Stripe from "stripe";
import dotenv from "dotenv";
const router = express.Router();
dotenv.config() ;

const stripe = Stripe(process.env.STRIPE_KEY) ;
// console.log(process.env.STRIPE_KEY) 

router.post('/create-checkout-session',async (req,res)=>{
  try{
    const {products} = req.body ;
    const line_items = products.map((item)=>{
        return{
            price_data : {
                currency : "inr",
                product_data : {
                  name : item.title ,
                  images : item.images ,
                  metadata : {
                    id : item.id
                  }, 
                }, 
                unit_amount: item.price * 100 , 
              },
              quantity : 1 
            };
    }) ;
    const session = await stripe.checkout.sessions.create({
        line_items,
         mode: 'payment',
         success_url: `http://localhost:5173/checkout-success`,
         cancel_url: `http://localhost:5173/cart`,
       });
    res.send({url:session.url})
      }
      catch(error){
        console.log(error)
      }
}) ;






export default router ;