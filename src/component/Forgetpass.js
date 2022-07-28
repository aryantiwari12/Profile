import React, { useState } from "react";
import IMAGE from "./IMG/logo2x.png";
import { Link } from 'react-router-dom';
import axios from "axios";

function Forgetpass() {


    const base_url = "http://139.59.47.49:4004/api";

    const [email, setemail] = useState("")


    const sendpass = () => {

        axios.post(`${base_url}/account/forgot/password`, {

            email: email

        }).then((res) => {
            console.log(res);
        })

        
    }

    const emailvalidation=()=>{
    let EmailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    document.getElementById("span2").style.display = "block"
    if (EmailRegEx.test(email)) {

      document.getElementById("span2").innerHTML = "your email is valid";
      document.getElementById("span2").style.color = "green";
    }
    else {

      document.getElementById("span2").innerHTML = "your email is invalid";
      document.getElementById("span2").style.color = "red";
      return false;
    }


}

    return (
        <div>
            <div className="container shadow bg-white w-25 rounded p-2">
                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2 w-25" />
                </div>
                <div className="name mt-2">
                    <h4>Forgotten your password</h4>
                </div>
                <form>
                    <div class="text1 mt-2">
                        <input className="form-control mt-2" type="email" placeholder="Email" value={email} onChange={(e) => {setemail(e.target.value);emailvalidation()}} />
                        <span className='text-start' id="span2"></span>
                        
                    </div>
                    <Link to="/Reset">
                        <button type="submit" className="w-100  rounded border-0 mt-5 p-2 " id="hide" onClick={() => sendpass()} disabled={email.length === 0}>Send reset link</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default Forgetpass;