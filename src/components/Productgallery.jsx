import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDataToGallery } from '../store/slices/gallerySlice'
import Item from './Item'


const Productgallery = () => {
    const dispatch = useDispatch() ;
    const getApiData = async () => {
        try {
            const res = await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=5")
            dispatch(addDataToGallery(res.data))
         } catch (error) {
            console.log(error)
        } 
    }  
 
    useEffect(()=>{
        getApiData();
    },[])

    const data = useSelector((state) => state.gallery);
    console.log(data) 

    return (
        <div>
            <h1 className='font-bold text-4xl mt-10 text-gray-700 ml-8'>Browse Items</h1>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data.map((item)=>
                            <Item product = {item} />
                        )}
                    </div>
                </div>
            </div>

        </div>
    )   
}

export default Productgallery
