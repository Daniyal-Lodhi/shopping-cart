import React from 'react'
import { useSelector } from 'react-redux'


const ProductView = () => {
    const product = useSelector((state)=>state.ProductView) 
    console.log(product)
  return (
    <div className=' mx-auto flex flex-col bg-slate-300 pt-10 justify-center align-middle px-5 space-y-5 pb-16'>

        <div className='flex justify-center space-x-20 mt-5'>
        <img src={product.images[0]} alt="" className='w-[26%] h-70 rounded-lg '/>
        <img src={product.images[1]} alt="" className='w-[26%] h-70 rounded-lg '/>
        <img src={product.images[2]} alt="" className='w-[26%] h-70 rounded-lg '/>
        </div>

        <div className='flex justify-between '>
            <div className='flex flex-col space-y-3 mt-10'>
                <h1 className='text-3xl ml-5 font-bold text-gray-700 '>{product.title}</h1>
                <p className='ml-5 w-[60%] text-gray-700'>{product.description}</p>
            </div>
            <div className='flex flex-col justify-center align-middle text-center'>
            <h1 className='text-3xl font-bold  w-64 mt-10' >Price {product.price} Rs</h1>
            <button className='bg-green-600 px-10 py-3 my-5 rounded-md hover:cursor-pointer hover:bg-green-700'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductView
