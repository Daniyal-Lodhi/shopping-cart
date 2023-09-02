import express  from "express";
import cors from "cors" ; 
import stripeRouter from "./routes/stripe.js"
  

   
const app = express() 
app.use(express.json()) ;
app.use(cors()) ;
app.use('/checkout',stripeRouter)
app.listen(5000,()=>{
    console.log("shopping Cart backend server")
}) 
 