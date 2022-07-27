import React, { useEffect } from "react";
import IMAGE1 from "./IMG/logo2x.png";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
function Signup() {

    

      const [mobile,setmobile]=useState("")
      const [email,setemail]=useState("")
      const [password,setpassword]=useState("")
      const [showpassword,setShowpassword]=useState(true)
      const [show,showdata]=useState(true);
    

     let item; 

  

    function visible(){
        showpassword ? setShowpassword(false) : setShowpassword(true)
    }
    
 
     function Validation(){
        let emailcheck=/^[A-Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        document.getElementById("span1").style.display = "block"
        document.getElementById("span2").style.display = "none"
        if (emailcheck.test(email)) {

            document.getElementById("span1").innerHTML = "your email is valid";
            document.getElementById("span1").style.color = "green";
        }
        else {

            document.getElementById("span1").innerHTML = "your email is invalid";
            document.getElementById("span1").style.color = "red";
            return false;
        }
     }


     function mobilevalidation(){
        let mobilechack=/^[789][0-9]{8}$/;
        document.getElementById("span1").style.display = "none"
        document.getElementById("span2").style.display = "block"
        if (mobilechack.test(mobile)) {

            document.getElementById("span2").innerHTML = "your mobile is valid";
            document.getElementById("span2").style.color = "green";
        }
        else {

            document.getElementById("span2").innerHTML = "your mobile is invalid";
            document.getElementById("span2").style.color = "red";
            return false;
        }

     }

     const singuppage = () => {


        if((email) && (mobile)){

        axios.post("http://139.59.47.49:4004/api/account/register", {
            email:email,
            password:password,
            mobile_number:mobile,
            country_code: +91,
            device_type: 1,
        }).then((res)=>{
            alert("you are successfully register")
            console.log(res.data.token);
            item = res.data.token
            localStorage.setItem("token", item)
            
        })
        setmobile("")
        setemail("")
        setpassword("")
    
    }else{
        alert("Please fill all input box")
    }
 
    }

   return (
        <div>
            <div className="container bg-white w-50 shadow rounded">
                <div className="img2 ">
                    <img src={IMAGE1} alt="" className="mt-2" />
                </div>
                <div className="Signuppage mt-2">
                    <h4>Sign up</h4>
                </div>
                <div class="formdata">
                    <form class="form-group">
                        <i class="fa-solid fa-user text-danger"></i>
                        <input type="text" className="w-100 form-control m-2" placeholder="Mobile" id="mobile1" value={mobile}  onChange={(e)=>{setmobile(e.target.value);mobilevalidation()}} />
                        <span className='text-start' id="span2"></span>
                        <i class="fa-solid fa-envelope text-danger"></i>
                        <input type="text" className="w-100 form-control m-2" placeholder="Email" id="email1" value={email}  onChange={(e)=>{setemail(e.target.value);Validation(e);}} required/>
                        <span className='text-start' id="span1"></span>
                        <i className={showpassword?"fa-solid fa-eye-slash text-danger":"fa-solid fa-eye text-danger"} onClick={visible}></i>
                        <input type={showpassword?"password":"text"} className="w-100 form-control m-2" placeholder="Password" id="password1"  value={password} onChange={(e)=>setpassword(e.target.value)} required/>

                        <div className='row mt-2'>
                            <div className='col-1 e-0'>
                                <input type="checkbox" required />
                            </div>
                            <div className='col-11 ms-0 ps-0'>

                                <small class="hello">By clicking Create Account you agree to the<span className='text-danger'>
                                    <a href="hello" className='link-danger' alt="">Terms of service </a></span> and<span className='text-danger'><a href="hello" className='link-danger' alt=""> <br />Privacy policy</a></span></small>
                            </div>
                        </div>
                        <button  class="w-100 rounded border-0 p-2 text-white" id="btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={() => singuppage()} style={{ backgroundColor: "#EB1D36" }}>Sign up</button>
                    </form>

                </div>

                <div className="continue mt-2">
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="exampleModalLabel">Email Varfication</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>Thanks for Signing up! we just need to verfily your email address to complete to setting up your account</p>
                                </div>
                                <div class="modal-footer">

                                    <button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Send link</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="already mt-2">
                    <p className="p-2" >You have already account?<Link to={'/Signin'}><a href="#" className="text-danger"> Sign in</a></Link></p>
                </div>

            </div>


        </div>

    );

}
export default Signup;