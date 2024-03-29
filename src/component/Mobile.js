import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import IMAGE from "./IMG/logo2x.png";
import { Link } from 'react-router-dom';

function Mobile() {
    const [showpassword, setShowpassword] = useState(true)
    const [signupwithphone, setSignupwithphone] = useState({
        code: "",
        mobile: ""
    })
    const [complete, setComplete] = useState(true);
    const [otp, setOtp] = useState({
        input1: "",
        input2: "",
        input3: "",
        input4: ""
    })
    const Checkpassword = () => {
        showpassword ? setShowpassword(false) : setShowpassword(true)
    }
    const CodemobileChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setSignupwithphone({
            ...signupwithphone,
            [name]: value
        })

        setOtp({
            ...otp,
            [name]:value
        })
    }
    let item;

    const mobileSign = async () => {

        try {

            if (signupwithphone.code !== "" && signupwithphone.mobile !== "") {
                let res = await axios.post("http://139.59.47.49:4004/api/account/register", {
                    country_code: signupwithphone.code,
                    mobile_number: signupwithphone.mobile,
                    device_type: 1,

                })

                console.log(res.data.token)
                item = res.data.token
                localStorage.setItem("token", item)
            }

            else if (signupwithphone.code === "" || signupwithphone.mobile === "") {
                alert("Please fill the data")
            }
        }
        catch {

            console.log("error")
        }
       

        setComplete(false)
    }
    var id = document.getElementsByTagName('input')
    console.log(id)
    const onSend = () => {
        setOtp({
            input1: "",
            input2: "",
            input3: "",
            input4: "",
        })
    }
    const OtpChange = (e) => {
        setOtp(e.target.value)
    }

    let inputRef = useRef(null)
    let inputRef1 = useRef(null)
    let inputRef2 = useRef(null)
    let inputRef3 = useRef(null)

    const onClick = (value) => {
        if (value) {
            inputRef1.current.focus()
        }
        else {
            inputRef.current.focus()
        }

    }
    const onClick1 = (value) => {
        if (value) {
            inputRef2.current.focus()
        }
        else {
            inputRef.current.focus()
        }
    }
    const onClick2 = (value) => {
        if (value) {
            inputRef3.current.focus()
        }
        else (inputRef1.current.focus())
    }
    const onClick3 = (value) => {
        if (value) {
            inputRef3.current.focus();
        }
        else {
            inputRef2.current.focus();
            setComplete(false)
        }
    }
    function verfied() {
        
        const {input1,input2,input3,input4}=otp

        axios.post("http://139.59.47.49:4004/api/account/verify/otp", {
            mobile_number: signupwithphone.mobile,
            otp:`${input1}${input2}${input3}${input4}`
        }).then((res) => {
            console.log(res);
        })
        console.log(otp)
    }
    return (
        <>
            <div className='container  w-50'>
                <div className="container  d-flex  bg-white rounded w-50 h-100 justify-content-center align-items-center mt-5">
                    <div className="row "  style={{ height: "350px", width: "450px" }}>
                        <div className="modal-body">
                            <div className='col-12'>
                                <img src={IMAGE} alt="" />
                            </div>
                            <h5 className='mt-4 mb-5'>Sign Up</h5>
                            <form onSubmit={(e) => { e.preventDefault(); mobileSign() }}>
                                <div className="col-mb-4 mt-3">
                                    <input type="text" className="form-control mb-2" placeholder="+91Country/India" name="code" value={signupwithphone.code} onChange={CodemobileChange} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Mobile Number" name="mobile" value={signupwithphone.mobile} onChange={CodemobileChange} />
                                </div>
                                <button type="submit" className="btn btn-danger w-100 mt-3 rounded" data-bs-toggle="modal" data-bs-target="#myModal1" value="Continue" disabled={signupwithphone.code.length === 0 || signupwithphone.mobile.length === 0} >Continue</button>
                                <p></p>
                            </form>
                            <p className="mt-4">You have already account?<span className="text-danger"><Link to="/signin">Sign'in</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>

           
            < div >
                <div className="modal" id="myModal1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className='col-12'>
                                    <img src={IMAGE} alt="" />
                                </div>
                                <div className='row mt-3'>
                                    <div className=' row mt-4'>
                                        <div type="button" className=" col-3 me-5" data-bs-dismiss="modal"><i className="fa-solid fa-arrow-left text-start" style={{ width: "150px" }} data-bs-dismiss="modal"></i></div>
                                        <div className=' col-5  '><p>Confirm Your Number</p></div>
                                    </div>
                                </div>
                                <h5 className='mt-3'>Enter the code just send to</h5>
                                <h6 className='mt-2'>+91{signupwithphone.mobile}:</h6>
                                <div className='row mt-4'>
                                    <input ref={inputRef} autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center'onChange={(e) => { setComplete(false); onClick(e.target.value);CodemobileChange(e)}} name="input1" maxLength="1" value={otp.input1} style={{ height: "80px", width: "80px" }} />
                                    <input ref={inputRef1} className='col-3 border border-2 ms-4  text-center d-flex justify-content-center align-items-center' onChange={(e) => { setComplete(false); CodemobileChange(e); onClick1(e.target.value) }} name="input2" maxLength="1" value={otp.input2} style={{ height: "80px", width: "80px" }} />
                                    <input ref={inputRef2} className='col-3 border border-2 ms-4  text-center d-flex justify-content-center align-items-center' onChange={(e) => { setComplete(false); CodemobileChange(e); onClick2(e.target.value) }} name="input3" maxLength="1" value={otp.input3} style={{ height: "80px", width: "80px" }} />
                                    <input ref={inputRef3} className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) => { setComplete(true); CodemobileChange(e); onClick3(e.target.value) }} name="input4" value={otp.input4} style={{ height: "80px", width: "80px" }} />
                                    {
                                        complete ? <i className="fa-solid fa-check text-white rounded col-3 border border-2 ms-auto bg-success p-2 text-center d-flex justify-content-center align-items-center mt-2"></i> : ""
                                    }
                                </div>
                                <button className="mt-5" onClick={() => verfied()}>OTP</button>
                                <p className='mt-4'>Didn't get a text? <span onClick={onSend}><a href='#'><b>Send again</b></a></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Mobile;