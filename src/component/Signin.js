import React, { useState } from "react";
import IMAGE from "./IMG/logo2x.png";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";


function Signin() {
  
      const navigate=useNavigate()
      const [email,setemail]=useState("");
      const [password,setpassword]=useState("");

    const submitdata=()=>{

         

              axios.post("http://139.59.47.49:4004/api/account/login",{

                 email:email,
                 password:password

              }).then((res)=>{
                alert("login successfully")
                console.log(res);
                console.log(res.data.token)
                localStorage.setItem('token',res.data.token)
                navigate('/Myaccounts')
                
              }) 
              .catch(error=>{
                alert("you are wrong user");
                console.log(error)
              })
              
    }



    return (
        <div>
            <div className="container bg-white w-25 shadow rounded">
                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2 w-25" />
                </div>
                <div className="name mt-5">
                    <h4>Welcome to Back</h4>
                </div>
                <form class="mt-2">
                    <input type="text" className="form-control m-2 mt-2" placeholder="Email Address" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    <input type="password" className="form-control m-2 " placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    <h3 class="text-danger fs-6 text-end mt-2"><Link to={'/Forgetpass'}>Forget Password?</Link></h3>
                </form>

                <button class="w-100 rounded border-0 p-2 text-white" onClick={()=>submitdata()} style={{ backgroundColor: "#EB1D36" }}>Sign in</button>


                <div className="already mt-5">
                    <p className="p-2">You have don't account then create?<Link to={'/Signup'}><a href="#">Sign Up</a></Link></p>
                </div>

            </div>
            
        </div>
    );
}
export default Signin;