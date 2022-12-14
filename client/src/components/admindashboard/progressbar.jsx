import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import Axios from 'axios'
import { useState } from 'react'
import { useEffect,useContext } from 'react'
import { UserContext } from '../../store/usercontext'
function Progressbar() {
    const navigate =useNavigate()
    const [applicants,setapplicants]=useState([])
    const {removeCookie} = useContext(UserContext)
    useEffect(()=>{
        Axios.get('http://localhost:5000/progressbar').then((response)=>{
        //  console.log(response.data); 
        setapplicants(response.data)
        }).catch((err)=>{
          console.log(err);
        })
      })
      const logout = () => {
        // localStorage.removeItem('user');
        // setUserDetails(null)
        removeCookie("token");
        navigate("/admin");
      // alert('help to logout') 
      };
  return (
    <div className='flex'>
        {/* sidebar */}
    <div class="w-1/5 h-screen shadow-md bg-gray-700 relative" id="sidenavSecExample">
  <div class="pt-4 pb-2 px-6">
    <a href="#!">
      <div class="flex items-center">
        <div class="shrink-0">
          <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar"/>
        </div>
        <div class="grow ml-3">
          <p class="text-sm font-semibold text-blue-600">Jason McCoel</p>
        </div>
      </div>
    </a>
  </div>
  <ul class="relative px-1">
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
        </svg>
        <Link to="/admindashboard"><span>Dashboard</span></Link> 
      </a>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
        </svg>
        <Link to='/approvelist'><span>Approved List</span></Link>
      </a>
    </li>
  </ul>
  <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
        </svg>
        
        <Link to='/rejectlist'><span>Rejected List</span></Link>
      </a>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
        </svg>
       <Link to='/progressbar'> <span>Progress Bar</span></Link>
        
      </a>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
        </svg>
        <Link to='/slotbooking'> <span>Booking Slots</span></Link>
      </a>
    </li>
    <li class="relative">
      <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
        {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
        </svg> */}
        
        <button onClick={logout}><span>Log Out</span></button>
      </a>
    </li>
</div>
{/* sidebar ends */}

{/* table for progress */}
    
{/* second table */}

<h1 className='pl-2 text-2xl'>Applications</h1>
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full ">
      <div class="overflow-hidden">
        <table class="w-full mt-6">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                No.
              </th>
              <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                Idea
              </th>            
              <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
             Status
              </th>
              <th scope="col" class="text-lg font-medium text-gray-900 px-6 py-4 text-left">
                Progress
              </th>
            </tr>
          </thead>
          <tbody>
            {
            applicants.map((obj,index)=>{
              return(
                <tr class="bg-gray-100 border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">{index+1}</td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {obj.name}
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {obj.Address}
                </td>
                
                
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {obj.status}
                </td>
                <td>
                <div class="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-900 ">
             <div class={` h-2.5 rounded-full ${obj.status === "Approved" ? "w-[75%] bg-blue-600 dark:bg-blue-500" : obj.status === "Rejected" ? "w-[50%] bg-red-600 dark:bg-red-500" : obj.status === "pending" ? "w-[25%] bg-orange-600 dark:bg-orange-500" : obj.status === "Booked" ? "w-[100%] bg-green-600 dark:bg-green-500": ''}`}></div>
                                                        </div>
                  
                </td>
              </tr>
  
             )
            })
            }
                    
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Progressbar
