import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
function Changepassword() {

  const base_url = "http://139.59.47.49:4004/api";



  const [oldpassword, setoldpassword] = useState("")
  const [newpassword, setnewpassword] = useState("")




  const Restpassword = async () => {




    const data = {
      old_password: oldpassword,
      new_password: newpassword

    }
    let res = await axios.put(`${base_url}/account/change/password`, data, {
      headers: {
        'Authorization': localStorage.getItem("token")
      }

    })
    setoldpassword("")
    setnewpassword("")
    console.log(res)

    alert("your are succefully update password thanku!!!")

  }

  const [profiledata, setprofiledata] = useState({
    first_name: " ",
  })

  const usename = profiledata.first_name;

  const getimage = async () => {

    await axios.get(`${base_url}/profile`, {
      headers: {
        'Authorization': localStorage.getItem("token")
      }
    }).then((res) => {

      let profiledata = localStorage.setItem("profileimage", res.data.profile.profile_image)
      let s = localStorage.getItem(profiledata)
      //  setFile(res.data.profile_image)
      //  setstore(res.data.profile.profile_image)
      setprofiledata(res.data.profile)
      console.log(res.data.profile_image)
    })
  }

  useEffect(() => {
    getimage()
  }, [])




  const passwordvalidation = () => {
    let strongPasswordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,16}$/
    document.getElementById("span1").style.display = "none"
    document.getElementById("span2").style.display = "block"
    if (strongPasswordRegEx.test(oldpassword)) {

      document.getElementById("span2").innerHTML = "your password is valid";
      document.getElementById("span2").style.color = "green";
    }
    else {

      document.getElementById("span2").innerHTML = "your password is invalid";
      document.getElementById("span2").style.color = "red";
      return false;
    }

  }

  const newpasswordvalidation = () => {
    let strongPasswordRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.* )(?=.*[^a-zA-Z0-9]).{8,16}$/
    document.getElementById("span2").style.display = "none"
    document.getElementById("span1").style.display = "block"
    if (strongPasswordRegEx.test(newpassword)) {

      document.getElementById("span1").innerHTML = "your password is valid";
      document.getElementById("span1").style.color = "green";
    }
    else {

      document.getElementById("span1").innerHTML = "your password is invalid";
      document.getElementById("span1").style.color = "red";
      return false;
    }

  }












  return (
    <div>
      <Header name={usename} />
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
            <input type="text" className="form-control mt-2" placeholder='Enter the old password' value={oldpassword} onChange={(e) => { setoldpassword(e.target.value); passwordvalidation() }} alt='' />
            <span className='text-start' id="span2"></span>
            <p className='text-start mt-2'>New Password</p>
            <input type="text" className="form-control mt-2" placeholder='Enter the New password' value={newpassword} onChange={(e) => { setnewpassword(e.target.value); newpasswordvalidation() }} alt='' />
            <span className='text-start' id="span1"></span>
            <button className='float-start mt-2 border   p-2' id="hide" onClick={Restpassword} disabled={oldpassword.length === 0 || newpassword.length === 0}>Update password</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Changepassword