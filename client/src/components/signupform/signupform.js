import React,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
function Signupform() {
  const navigate =useNavigate()

  const formvalues ={
  name:"",
  email:"",
  password:""
 }
const [signup,setSignup]=useState(formvalues); 
 
const handleChange= (e) =>{
  setSignup({...signup,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
  axios
  .post("http://localhost:5000/signup",signup)    
  .then((res)=>{
    navigate("/login")
  }) 
  .catch((error)=>{
    console.log(error);
  })
 }

 return (
      <div className='grid grid-cols-1 sm:grid-cols-1 my-3 w-full'>
      <div className='hidden sm:block'>
        {/* <img className='w-full h-full object-cover rounded-md p-4' src={shakehands} alt="" /> */}
      </div>

      <div className='bg-light-500 flex flex-col justify-center'>
        <h1 className='text-blue-900 font-bold text-3xl pb-3 text-center'>Welcome Entrepreneurs</h1>

        <form className='max-w-[400px] w-full h-max mx-auto rounded-lg bg-gray-700 p-8 px-8 '>
          <h2 className='text-4xl text-white font-extrabold text-center'>SIGN UP HERE</h2>

          <div className='flex flex-col text-white py-2'>
            <label className=''>Name</label>
            <input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
             type="text"
             name='name' 
             onChange={handleChange}/>
          </div>

          <div className='flex flex-col text-white py-2'>
            <label className='text-blue-900 text-bold'>Email</label>
            <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none'
             type="email" 
             name='email'
             onChange={handleChange}/>
          </div>
          
          <div className='flex flex-col text-white py-2'>
            <label className=''>Password</label>
            <input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' 
            type="password" 
            name='password'
            onChange={handleChange}/>
          </div>
           
          <button className='w-full my-5 py-2 bg-blue-900 shadow-lg  hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
          onClick={handleSubmit}>Submit</button>
          <Link className='text-white underline' to="/login">Login</Link> 
            
        </form>
      </div>
    </div>
    
  )
}

export default Signupform
