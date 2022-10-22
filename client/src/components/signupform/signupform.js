import React from 'react'
import {Link} from 'react-router-dom'
function signupform() {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-1 my-3 w-full'>
      <div className='hidden sm:block'>
        {/* <img className='w-full h-full object-cover rounded-md p-4' src={shakehands} alt="" /> */}
      </div>

      <div className='bg-light-500 flex flex-col justify-center'>
        <h1 className='text-blue-900 font-bold text-3xl pb-3 text-center'>Welcome Entrepreneurs</h1>

        <form className='max-w-[400px] w-full h-max mx-auto rounded-lg bg-blue-200 p-8 px-8 '>
          <h2 className='text-4xl text-white font-extrabold text-center'>SIGN UP HERE</h2>

          <div className='flex flex-col text-blue-900 py-2'>
            <label className=''>Name</label>
            <input className='p-2 rounded-lg bg-blue-300 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
          </div>

          <div className='flex flex-col text-gray-400 py-2'>
            <label className='text-blue-900 text-bold'>Email</label>
            <input className='rounded-lg bg-blue-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
          </div>
          <div className='flex flex-col text-gray-400 py-2'>
            <label className='text-blue-900 text-bold'>Phone Number</label>
            <input className='rounded-lg bg-blue-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="number" />
          </div>
          <div className='flex flex-col text-blue-900 py-2'>
            <label className=''>Password</label>
            <input className='p-2 rounded-lg bg-blue-300 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password" />
          </div>
          
          <button className='w-full my-5 py-2 bg-blue-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Submit</button>
          <Link to="/login">Login</Link> 
            
        </form>
      </div>
    </div>
    
  )
}

export default signupform
