import React from 'react'
import Header from './Header';
import IMAGE1 from "./IMG/personal_info.png"
import IMAGE2 from "./IMG/change_password.png"
import IMAGE3 from "./IMG/notification_setting.png";
import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Myaccounts = ({props}) => {

    

   useEffect(()=>{ 
     if(!localStorage.getItem('token')){
        Navigate('\Signin') 
     }
   },[])

   const Logoutdata=()=>{
    alert("hello")
   }

  return (
    <div>
      
      <Header name={props}/>
     <div className="container ">
     
        <div className='mt-5'>
          <h3 className='text-start'>My Account</h3>
        </div>
        <div className="row mt-5 ">
         
          <div className="col border  m-2  shadow">
          <Link to={'/profile'} id="hello">
            <img src={IMAGE1} className="float-start mt-5" alt="" />
            
            <p className='mt-5'><b>Personal Info</b> <i class="fa-solid fa-angle-right text-danger"></i></p>
            <p className="mt-5 text-start">Personal details</p>
            </Link>
          </div>
          
          <div className="col border m-2  shadow">
            <img src={IMAGE2} className="float-start mt-5" alt="" />
            <Link to={'/changepassword'} id="hello">
            <p className='mt-5'><b>Change Password</b> <i class="fa-solid fa-angle-right text-danger"></i></p>
            <p className="mt-5 text-start">Update your Password and secure your account</p>
            </Link>
          </div>
          <div className="col border m-2  shadow">
          <Link to={'/Notificationsetting'} id="hello">
            <img src={IMAGE3} className="float-start mt-5" alt="" />
            <p className='mt-5'><b>Notification Setting</b> <i class="fa-solid fa-angle-right text-danger"></i></p>
            <p className="mt-5 text-start">Review payments,payouts,copouns,Gift cards,and taxes</p>
            </Link>
          </div>
        </div>
        <div className='logout border mt-5 p-2 rounded shadow'>
          <p className='text-start mt-2 '><b>Logout</b><i class="fa-solid fa-right-from-bracket text-danger float-end" onClick={Logoutdata} role="button"></i></p>
        </div>
      </div>
      <Footer/>
    </div>






  )
}

export default Myaccounts