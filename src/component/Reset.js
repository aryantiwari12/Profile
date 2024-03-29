import React from "react";
import IMAGE from "./IMG/logo2x.png";
import { useState } from 'react';
import axios from "axios";
function Reset(){


    const base_url = "http://139.59.47.49:4004/api";

    const [token,settoken]=useState("");
    const [newpassword,setnewpassword]=useState("");


    const submitdata=()=>{

        const data={
            token:token,
            new_password:newpassword
        }

        axios.post(`${base_url}/account/reset/password`,data,{
        
        headers:{
            'Authorization': localStorage.getItem("token")
        }

        }).then((res)=>{
            console.log(res);
        })
    }




   return(
    <div>
        <div className="container bg-white w-25 rounded p-2">
                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2" />
                </div>
                <h3>Reset your password</h3>
                <>
                    <div className="mt-2">
                        <input type="text" className="form-control" placeholder="old Password" value={token} onChange={(e)=>settoken(e.target.value)} />
                        <input type="text" className="form-control mt-2" placeholder="new password" value={newpassword} onChange={(e)=>setnewpassword(e.target.value)} />
                    </div>
                    <button className="w-100 bg-danger mt-2 rounded border-0 text-white p-2" onClick={()=>submitdata()}>submit</button>
                </>
        </div>
    </div>
   );
}
export default Reset;