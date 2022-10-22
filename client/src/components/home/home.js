import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
function home() {
  return (
    <div className='homebody'>
   
     <div className='flex justify-end p-8'>
     <Link to="/login">
         <button type="button" class=" inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">Log In</button>
         </Link>
    </div>
    </div>
  )
}

export default home

