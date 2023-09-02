import React from 'react'
import {FcOk , FcLeft} from "react-icons/fc";
import { Link } from 'react-router-dom';

const Checkoutsuccess = () => {
  return (
    <div>
      <div className='h-screen flex flex-col bg-slate-400 justify-center items-center'>
        <FcOk className='w-64 h-16'></FcOk>

        <h1 className='sm:text-4xl text-center text-lg'>
         <span className='font-bold text-gray-800'> Congratulations! </span> <br /> Your order is placed
        </h1>

        <Link className='rounded-md text-sm  px-3 py-2 hover:bg-green-700 flex items-center bg-green-600 my-7 ' to ='/' >
          Back to browsing
          <FcLeft className='mt-1 ml-2' ></FcLeft> 
        </Link>

      </div>
    </div>
  )
}

export default Checkoutsuccess
