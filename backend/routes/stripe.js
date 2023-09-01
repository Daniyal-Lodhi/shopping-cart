import express from "express" ;
import Stripe from "stripe";
import dotenv from "dotenv";
const router = express.Router();
const env = dotenv.config() ;

const stripe = Stripe(process.env.STRIPE_KEY) ;

router.post('/create-checkout-session',async (req,res)=>{
    const {cartItems} = req.body ;
    const line_items = cartItems.map((item)=>{
        return{
            price_data : {
                currency : 'inr' ,
                unit_amount : item.price ,
                product_data:{
                    name:item.title ,
                    images : [item.images]
                },
                metadata:{
                    id:item.id
                }

            },
            quantity: 1 ,
        };
    }) ;
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode : 'payment',
        success_url : "http://localhost:5173/checkoutsuccess" ,
        cancel_url : "http://localhost:5173/cart" ,
    })
    res.send({url:session.url})
}) ;






export default router ;