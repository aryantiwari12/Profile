import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import IMAGE from "./IMG/on.png"
import IMAGE2 from "./IMG/off.png"
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import addNotification from 'react-push-notification';
function Notificationsetting() {


  const [show,setshow]=useState(false)

  const notificationshow= ()=>{

    

    show ? setshow(false) : setshow(true)
    
    addNotification({
      title: 'success',
      native:true         
    })

   
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
          <h6 className='text-center'>Notification Setting</h6>
        </div>
        <div className=''>
          <h3 className='text-start mt-5'>Notification settings</h3>
          
          <img src={show?IMAGE:IMAGE2} className="onn" onClick={notificationshow} role="button" alt="" />

        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Notificationsetting