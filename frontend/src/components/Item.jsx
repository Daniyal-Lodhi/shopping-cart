import React from 'react'
import { useDispatch } from 'react-redux';
import { addToOverview } from '../store/slices/ProductViewSlice';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
  const {product} = props ;
  const dispatch = useDispatch() ;
        const navigate = useNavigate()



    const triggerProductView = ()=>{
      dispatch(addToOverview(product))
      console.log("add to overview successfully")
      navigate("/overview")
    }
    return (

        <div key={product.id} className="group relative cursor-pointer"onClick={triggerProductView} >
        <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 cursor-pointer lg:h-80">
          <img
            src={product.images[0]}
            className="h-full w-full  cursor-pointer object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a href={product.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description.slice(0,50)}...</p>
            <button className='px-3 py-1 rounded-md bg-blue-950 text-white my-2' >Overview</button>
          </div>
          <p className="text-sm mr-5 font-medium w-16 text-gray-900">{product.price} Rs </p>
          
        </div>
      </div>
    )
}

export default Item