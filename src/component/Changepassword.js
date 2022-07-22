import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
function Changepassword() {



 

  const [oldpassword,setoldpassword]=useState("")
  const [newpassword,setnewpassword]=useState("")


  

  const Restpassword= async ()=>{

    
    
    
    const data={
      old_password:oldpassword,
      new_password:newpassword
      
    }
    let res=await axios.put("http://139.59.47.49:4004/api/account/change/password",data,{
       headers:{
        'Authorization': localStorage.getItem("token")
       } 
       
    })
    console.log(res)
    alert("your are succefully update password thanku!!!")
   
  }


  return (
    <div>
      <Header />
      <div className='container  mt-5'>
        <div className='mt-5'>
        <Link to="/Myaccounts" id="hello">
          <h6 className='text-start'>My Account</h6>
          </Link>
          <i class="fa-solid fa-angle-right text"></i>
          <h6 className='text-center'>Change Password</h6>
        </div>
        <div className='changepassword  w-50'>
           <h3 className='text-start mt-5'>Change Password</h3>
           <div className='border p-5 mt-5'>
            <p className='text-start'>Old Password</p>
            <input type="text" className="form-control mt-2" placeholder='Enter the old password' value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)} alt='' />
            <p className='text-start mt-2'>New Password</p>
            <input type="text" className="form-control mt-2" placeholder='Enter the New password' value={newpassword} onChange={(e)=>setnewpassword(e.target.value)} alt='' />
            <button className='float-start mt-2 border bg-danger text-white p-2' onClick={Restpassword}>Update password</button>
           </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Changepassword