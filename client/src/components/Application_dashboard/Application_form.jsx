import React,{useContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios"
import { UserContext } from '../../store/usercontext'
function Application_form() {
    const navigate =useNavigate()
    const formvalues ={
        name:"",
        Address:"",
        City:"",
        Phonenumber:"",
        Email:"",
        businessDetail:""
       }

      const [application,setapplication]=useState(formvalues);
      const {removeCookie} = useContext(UserContext)
      
      const handleChange= (e) =>{
        setapplication({...application,[e.target.name]:e.target.value})
      }
 
     const[submitdone,setsubmitdone]=useState('');

      const handleSubmit=(e)=>{
        e.preventDefault()
        axios
        .post("http://localhost:5000/applicationform",application)    
        .then((res)=>{
          console.log(res);
          setsubmitdone(res.data.msg)
           navigate("/userdashboard")
        }) 
        .catch((error)=>{
          console.log(error);
        })
       }

       const logout = () => {
        // localStorage.removeItem('user');
        // setUserDetails(null)
        removeCookie("token");
        navigate("/login");
      // alert('help to logout') 
      };
      
    return (
     
    <div className='flex justify-center'>

    {submitdone ? <><div className='block p-6 rounded-lg shadow-lg bg-white w-3/4 mb-96 text-2xl'>
      <h1>Your application is succesfully submitted.<br/>Our team will go through your application and contact you back as soon as possible</h1></div> </>: 
    <>
     <div class="block p-6 rounded-lg shadow-lg bg-white w-3/4">
  <form>
  <p className='text-2xl'>Application From</p>
  <br />
  <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="Name"
          name='name'
          required
          onChange={handleChange}/>
      </div>
      <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Address"
          name='Address'
          required
          onChange={handleChange}/>
      </div>
    </div>
    
    <div class="grid grid-cols-2 gap-4">
      <div class="form-group mb-6">
        <input type="text" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput123"
          aria-describedby="emailHelp123" placeholder="City"
          name='City'
          required
          onChange={handleChange}/>
      </div>
      <div class="form-group mb-6">
        <input type="number" class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput124"
          aria-describedby="emailHelp124" placeholder="Phone number" 
          name='Phonenumber'
          required
          onChange={handleChange}/>
      </div>
    </div>
    
    <div class="form-group mb-6">
      <input type="email" class="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
        placeholder="Email address"
        required
        name='Email'
        onChange={handleChange}/>
    </div>
    <div class="form-group mb-6">
      <textarea
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Details about the business plan"
      name='businessDetail'
      onChange={handleChange}
    ></textarea>
    </div>
   
    <button type="submit" class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out" 
      onClick={handleSubmit}>Submit</button>
  </form>

</div>
    
    </>}
     
<button onClick={logout} className='bg-gray-600 h-7 text-teal-50 rounded-full px-2 justify-center'
>Log Out</button>

    </div>
  )
}

export default Application_form
