import React,{useState} from 'react'
import shakehands from '../../../src/asset/shakehands.jpg'
import {Link,useNavigate} from 'react-router-dom'
import axios from "axios"
import { useCookies } from 'react-cookie';
function Loginform() {
  const navigate=useNavigate()
  
  const formvalues ={
    email:"",
    password:""
   }
  const [loginData,setloginData]=useState(formvalues); 

  const [cookie,setCookie]=useCookies(['user'])
  const handleChange= (e) =>{
    setloginData({...loginData,[e.target.name]:e.target.value})
  }
   
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios
    .post("http://localhost:5000/login",loginData)    
    .then((response)=>{
      if (response.data.state=="ok") {
        alert("login sucessful")
        setCookie('token', response.data.data, { path: '/' });
      //  window.localStorage.setItem("token",response.data.data)
        // window.location.href="/userdashboard"
        navigate("/userdashboard")
    }

      // navigate("/userdashboard")
    }) 
    .catch((error)=>{
      console.log(error);
    })
   }
  

  return (
   
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover rounded-md p-4' src={shakehands} alt="" />
      </div>

      <div className='bg-light-500 flex flex-col justify-center'>
        <h1 className='text-blue-900 font-bold text-3xl p-7 text-center'>Welcome Entrepreneurs</h1>

        <form className='max-w-[400px] w-full h-max mx-auto rounded-lg bg-gray-700 p-8 px-8 '>
          <h2 className='text-4xl text-white font-extrabold text-center'>LOGIN</h2>


          <div className='flex flex-col text-gray-400 py-2'>
            <label className='text-blue-900 text-bold'>Email</label>
            <input className='rounded-lg bg-white mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" 
            name='email'
            onChange={handleChange}
            required/>
          </div>
          <div className='flex flex-col text-blue-900 py-2'>
            <label className=''>Password</label>
            <input className='p-2 rounded-lg bg-white mt-2 focus:border-blue-500 focus:bg-gray-900 focus:outline-none' type="password" 
            name='password'
            onChange={handleChange}
            required/>
          </div>

          <button type='Submit' className='w-full my-5 py-2 bg-blue-900 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg'
          onClick={handleSubmit}>LOGIN</button>
          <Link className='text-white underline' to="/signup">Sign up</Link>
        
        </form>
      </div>
    </div>
  )
}

export default Loginform
