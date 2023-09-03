import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
      <div className='h-screen flex flex-col bg-slate-400 justify-center items-center '>
        {/* <FcOk className='w-64 h-16'></FcOk> */}

        <h1 className=' text-center text-xl sm:text-base mx-10 '>
         <span className='font-bold text-gray-800 sm:text-3xl  ' >Welcome to Shopping Cart</span> <br/> 
        </h1>
        <p className='text-center text-sm sm:text-base mx-10 mt-3'>
        Shopping Cart is a mini react js project by <a href=""> <p className='inline underline '>Daniyal lodhi</p></a>. It is a simple cart made for practice purpose, The states of products gallery, Overview and checkout are fully managed by <b>redux toolkit</b> library. Further more it also supports the checkout feature by <b>Stripe </b>where you can enter a test credit card number, any future date and any 3 digit CVC code and the checkout will proceed. It is in test mode because real world checkout will also need a real world business. 
        </p>
        <Link className='rounded-md text-sm  px-3 py-2 hover:bg-green-700 flex items-center bg-green-600 my-7 ' to ='/productgallery' >
          Click to Browse items 
          {/* <FcLeft className='mt-1 ml-2' ></FcLeft>  */}
        </Link>

    </div>
  )
}

export default Home
