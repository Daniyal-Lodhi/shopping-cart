import axios from 'axios'
import React from 'react'

const Productgallery = () => {
    const getApiData = async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Productgallery
