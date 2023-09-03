import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/App.css'



const ProductView = () => {
  // Toast message - Add to cart
  




  const dispatch = useDispatch()
  const product = useSelector((state) => state.ProductView)
  // adding item to cartstate
  const addToCartFunc = () => {
    dispatch(addToCart(product))
    toast.success('Product added to cart', {
      position: toast.POSITION.TOP_RIGHT,
      // className: 'toast-message'
  
    });
    
  }
  return (
    <div className=' mx-auto flex flex-col bg-slate-300 pt-5 h-10vh justify-center align-middle px-5 space-y-5 pb-3 sm:pb-8'>
      <h1 className='text-slate-700 text-4xl my-4'>Product Overview</h1>

      <div className='flex sm:flex-row flex-col items-center space-x-0 space-y-3  justify-center sm:space-x-10 sm:space-y-0 mt-5'>
        <img src={product.images[0]} alt="" className='sm:w-[26%] w-full  sm:h-70 h-52 rounded-sm' />
        <img src={product.images[1]} alt="" className='sm:w-[26%] w-full  sm:h-70 h-52 rounded-sm' />
        <img src={product.images[2]} alt="" className='sm:w-[26%] w-full  sm:h-70 h-52 rounded-sm' />
      </div>

      <div className='flex justify-between flex-col sm:flex-row '>
        <div className='flex flex-col space-y-3 mt-10 sm:items-start  items-center '>
          <h1 className='text-3xl sm:ml-5 ml-0 font-bold text-gray-700 '>{product.title}</h1>
          <p className='sm:ml-5 sm:w-[60%] text-gray-700 sm:text-left text-center'>{product.description}</p>
        </div>
        <div className='flex flex-col justify-center sm:align-middle items-center text-center'>
          <h1 className='text-3xl font-bold  w-64 mt-10' >Price: {product.price} Rs</h1>
          <div className='flex flex-col space-y-3 my-3 w-52 text-white'>
            <button className='bg-green-600 px-10 py-3  rounded-md  hover:cursor-pointer hover:bg-green-700' onClick={() => {
              addToCartFunc();
              showNotification()
            }}>Add to Cart</button>
            <Link className='bg-purple-600 px-10 py-3 rounded-md hover:cursor-pointer hover:bg-green-700' to={'/cart'}>Go to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView
