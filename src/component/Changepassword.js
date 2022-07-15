import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Footer from './Footer';
function Changepassword() {
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
           <form className='border p-5 mt-5'>
            <p className='text-start'>Old Password</p>
            <input type="text" className="form-control mt-2" placeholder='Enter the old password' alt='' />
            <p className='text-start mt-2'>New Password</p>
            <input type="text" className="form-control mt-2" placeholder='Enter the New password' alt='' />
            <button className='float-start mt-2 border bg-danger text-white p-2'>Update password</button>
           </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Changepassword