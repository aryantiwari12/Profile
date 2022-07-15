import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import IMAGE from "./IMG/on.png"
import Footer from './Footer';
function Notificationsetting() {
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
          <img src={IMAGE} className="onn" alt="" />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Notificationsetting