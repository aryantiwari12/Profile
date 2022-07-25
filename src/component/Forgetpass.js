import React, { useState } from "react";
import IMAGE from "./IMG/logo2x.png";
import { Link } from 'react-router-dom';
import axios from "axios";

function Forgetpass() {


    const [email,setemail]=useState("")


    const sendpass=()=>{

        axios.post("http://139.59.47.49:4004/api/account/forgot/password",{

          email:email

        }).then((res)=>{
            console.log(res);
        })

        // alert("link is send")
    }


    return (
        <div>
            <div className="container shadow bg-white w-25 rounded p-2">
                <div className="picture">
                    <img src={IMAGE} alt=""  className="mt-2 w-25" />
                </div>
                <div className="name mt-2">
                    <h4>Forgotten your password</h4>
                </div>
                <form>
                    <div class="text1 mt-2">
                        <input className="form-control mt-2" type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} />
                    </div>
                    <Link to="/Reset">
                    <button type="submit" className="w-100  rounded border-0 mt-5 p-2 " onClick={()=>sendpass()} disabled={email.length===0}>Send reset link</button>
                    </Link>
                </form>
            </div>
        </div>
    );
}
export default Forgetpass;