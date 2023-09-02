import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../store/slices/cartSlice';
import axios from 'axios';

const Cart = () => {
    const cartData = useSelector((state) => state.cart)
    const products = cartData.items;
    const totalPrice = cartData.totalPrice;
    const dispatch = useDispatch();
    // delete item from cart
    const handleDeleteFromCart = (ProductId) => {
        dispatch(removeFromCart(ProductId))
    }

    // Clear cart
    const handleClearCart = () => {
        dispatch(clearCart());
        console.log("hello")
    }
    
    // handle checkout
    const handleCheckout = async ()=>{
        axios.post("http://localhost:5000/checkout/create-checkout-session",{products})
        .then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url
                        }
        })   
        .catch((error)=>{
            console.log(error.message)
        })
    }  

    return ( 
        <div className='w-[95%] mx-auto  '>
            <h1 className='text-4xl my-5 font-semibold text-gray-700'>Welcome to Cart</h1>
            <hr className=" border-black" />
            <div className='my-7 sm:mx-2'>
                <ul className='list-none'>
                    {products && products.map((product) =>
                        <li className='py-2 bg-teal-200 rounded-md px-2 my-2 ' key={product.id}>
                            <div className='sm:flex sm:justify-between  '>
                                <div className='flex justify-center  space-x-8  align-middle '>
                                    <img src={product.images[0]} alt="" className='rounded-md w-20 h-24' />
                                    <p className='font-semibold text-gray-700 sm:text-xl text-base my-auto'>{product.title}</p>
                                </div>
                                <div className='flex my-auto align-middleborderw-80 sm:justify-end justify-center sm:w-auto px-3 items-center sm:px-0'>
                                    <div className='my-auto mr-5  text-gray-700 sm:text-xl text-sm'>
                                        Price : {product.price}/Rs
                                    </div>
                                    <div>
                                        <button className='py-1 px-2  bg-red-400 hover:bg-red-500 rounded-md text-white' onClick={() => handleDeleteFromCart(product.id)}>Delete from cart</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )}

                </ul>
                <div className=' text-gray-700 sm:text-xl text-base border-b border-gray-700 my-4 flex justify-between'>
                    <div>Total Price</div>
                    <div>{ totalPrice }/Rs.___</div>
                </div>
              <div className='flex justify-between my-auto items-center'>
                <p className='font-bold text-gray-600'>Just One Step back of placing order</p>
            <div className='sm:space-x-3 sm:space-y-0 sy space-y-2 outline-none flex flex-col sm:flex-row  justify-center items-center' >

              <button className='py-1 px-4 bg-cyan-800 hover:bg-cyan-950 sm:text-lg text-base   rounded-md text-white' onClick={() => handleClearCart()}>Clear Cart</button>

              <button className='py-1 px-4 bg-green-600 hover:bg-green-700   sm:text-lg text-base   rounded-md text-white' onClick={handleCheckout}  disabled={true} >Checkout</button>

              </div>
              </div>
            </div>
        </div>
    )
}

export default Cart
