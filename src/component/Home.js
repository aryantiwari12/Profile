import React from "react";
import IMAGE from "./IMG/logo2x.png";
import { useState, useRef, useEffect } from 'react';
import { GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';


const clientId = "287903283926-550kho5i6hb686m9r35h8vem5aco7oer.apps.googleusercontent.com";

const Home = () => {


    
  const responseGoogle=(res)=>{
    console.log(res)
  }

    

  



    const responseFacebook = (response) => {
        console.log(response);
    }






    return (
        <div>



            <div className="container shadow bg-white w-50 rounded mt-5">

                <div className="picture w-50">
                    <img src={IMAGE} alt="" className="mt-2 w-25" />
                </div>
                <div className="name mt-2">
                    <h1>Welcome to App</h1>
                </div>
                <div className="phone mt-5" >

                    <Link to={'/mobile'}>

                        <button className="w-75 text-white rounded border-0 p-2" style={{ backgroundColor: "#EB1D36" }}><i class="fa-solid fa-phone float-start mt-2"></i>Continue with Phone</button>
                    </Link>

                </div>
                <div className="google mt-2">

                    {/* <button className="w-75 text-white rounded border-0 p-2" style={{ backgroundColor: "#EB4747" }}><i class="fa-brands fa-google float-start mt-2"></i>Continue with Google</button> */}
                    <div id="samedata">
                        
                            <GoogleLogin
                                clientId="287903283926-in74jhpb5bvmmqigsgo1k8jluhen3j9j.apps.googleusercontent.com"
                                // buttonText="Sign In"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                
                            />

                    </div>





                </div>
                <div className="google mt-2">
                    {/* <button className="w-75 text-white rounded border-0 p-2" style={{ backgroundColor: "#1F4690" }}><i class="fa-brands fa-facebook-f float-start mt-2"></i>Continue with Facebook</button> */}
                    <FacebookLogin
                        appId="547431080413859"
                        autoLoad={true}
                        fields="name,email,picture"
                        // onClick={componentClicked}
                        callback={responseFacebook} />





                </div>
                <div className="already mt-5">
                    <p className="p-2">You have already account?<Link to={'/signin'}><a href="#"> Sign in</a></Link></p>
                </div>
            </div>




        </div>
    );

}
export default Home;