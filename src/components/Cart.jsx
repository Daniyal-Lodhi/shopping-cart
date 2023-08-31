import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeFromCart } from '../store/slices/cartSlice';

const Cart = () => {
    const cartData = useSelector((state) => state.cart)
    const products = cartData.items;
    const totalPrice = cartData.totalPrice;
    const dispatch = useDispatch();
    const handleDeleteFromCart = (ProductId) => {
        dispatch(removeFromCart(ProductId))
    }
    const handleClearCart = () => {
        dispatch(clearCart());
        console.log("hello")
    }

    return (
        <div className='w-[95%] mx-auto  '>
            <h1 className='text-4xl my-5 font-semibold text-gray-700'>Welcome to Cart</h1>
            <hr className=" border-black" />
            <div className='my-7 mx-2'>
                <ul className='list-none'>
                    {products && products.map((product) =>
                        <li className='py-2 bg-teal-200 rounded-md px-2 my-2' key={product.id}>
                            <div className='flex justify-between'>
                                <div className='flex justify-center  space-x-8 w-max align-middle '>
                                    <img src={product.images[0]} alt="" className='rounded-md w-20 h-24' />
                                    <p className='font-semibold text-gray-700 text-xl my-auto'>{product.title}</p>
                                </div>
                                <div className='flex my-auto align-middleborderw-80 justify-end '>
                                    <div className='my-auto mr-5  text-gray-700 text-xl'>
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
                <div className=' text-gray-700 text-xl border-b border-gray-700 my-4 flex justify-between'>
                    <div>Total Price</div>
                    <div>{ totalPrice }/Rs.___</div>
                </div>
              <div className='flex justify-between my-auto items-center'>
                <p className='font-bold text-gray-600'>Just One Step back of placing order</p>
            <div className='space-x-3 outline-none' >
              <button className='py-1 px-4 bg-cyan-800 hover:bg-cyan-950  text-lg   rounded-md text-white' onClick={() => handleClearCart()}>Clear Cart</button>
              <button className='py-1 px-4 bg-green-600 hover:bg-green-700  text-lg   rounded-md text-white' >Checkout</button>
              </div>
              </div>
            </div>
        </div>
    )
}

export default Cart