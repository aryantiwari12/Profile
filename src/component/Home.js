import React from "react";
import IMAGE from "./IMG/logo2x.png";
import { useState, useRef, useEffect } from 'react';
import '../CSS/style.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Link } from 'react-router-dom';


const clientId = "95373987300-ijc0gt9n8q3f3abqib4mkn73bq7a0j2p.apps.googleusercontent.com";

const Home = () => {


    const [showloginButton, setShowloginButton] = useState(true);


    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
    };
    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setShowloginButton(true);

    };


    const responseFacebook = (response) => {
        console.log(response);
      }






    return (
        <div>



            <div className="container bg-white w-50 rounded">

                <div className="picture">
                    <img src={IMAGE} alt="" className="mt-2" />
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
                        {showloginButton ?
                            <GoogleLogin
                                clientId={clientId}
                                buttonText="Login"
                                onSuccess={onLoginSuccess}
                                onFailure={onLoginFailure}
                                cookiePolicy={'single_host_origin'}
                            /> : null}

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