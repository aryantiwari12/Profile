import React from 'react'
import Footer from './Footer';
import Header from './Header';
import IMAGE from "./IMG/1.png";
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
function Profile() {




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
        else {
            inputRef1.current.focus()
        }

    }
    const onClick3 = (value) => {
        if (value) {
            inputRef3.current.focus();
        }
        else {
            inputRef2.current.focus();
            // setComplete(false)
        }
    }




    return (
        <div>
            <Header />
            <div className='container'>
                <div className='mt-5'>
                    <Link to="/Myaccounts" id="hello">
                        <h6 className='text-start'>My Account</h6>
                    </Link>
                    <i class="fa-solid fa-angle-right text"></i>
                    <h6 className='text-center'>Personal info</h6>
                </div>
                <div className='row'>
                    <b className='fs-3 text-start mt-2'>personal info</b>
                    <div className='col-8  text-start mt-5  m-1 p-2 w-50'>
                        <div className='formdata'>
                            <form className=' border mt-2 p-2'>
                                <label>Name</label>
                                <p className='text-danger'>Cancel</p>
                                <input type={"text"} className="form-control mt-2" alt='' />
                                <button className='bg-danger border text-white mt-2'>Save</button>
                            </form>
                        </div>
                        <div className='formdata'>
                            <form className=' border mt-2 p-2'>
                                <label>Location</label>
                                <p className='text-danger'>Cancel</p>
                                <input type={"text"} className="form-control mt-2" alt='' />
                                <h6 className='text-danger'>Change</h6>
                                <button className='bg-danger border text-white mt-2'>Save</button>
                            </form>
                        </div>
                        <div className='formdata'>
                            <form className=' border mt-2 p-2'>
                                <label>Email</label>
                                <p className='text-danger'>Cancel</p>
                                <input type={"text"} className="form-control mt-2" alt='' />
                                <h6 className='text-danger'>Change</h6>
                                <button className='bg-danger border text-white mt-2'>Save</button>
                            </form>
                        </div>
                        <div className='formdata'>
                            <div className=' border mt-2 p-2'>
                                <label>Mobile Number</label>
                                <p className='text-danger'>Cancel</p>
                                <input type={"text"} placeholder="India(+91)" className="form-control mt-2" alt='' />
                                <div class="input-group mb-3 mt-2">
                                    <span class="input-group-text">+91</span>

                                    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                                </div>
                                <button className='bg-danger border text-white mt-2' data-bs-toggle="modal" data-bs-target="#exampleModal2">Verify</button>
                                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title1" id="exampleModalLabel">Confirm your number</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body p-5">
                                                <h4 className='fs-6 text-center'>Enter the just send to</h4>
                                                <h4 className='text-center fs-6'>+91</h4>
                                                <div className='row mt-2'>
                                                    <input ref={inputRef} autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) => onClick(e.target.value)} style={{ height: "60px", width: "60px" }} />
                                                    <input ref={inputRef1} autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) => onClick1(e.target.value)} style={{ height: "60px", width: "60px" }} />
                                                    <input ref={inputRef2} autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) => onClick2(e.target.value)} style={{ height: "60px", width: "60px" }} />
                                                    <input ref={inputRef3} autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) => onClick3(e.target.value)} style={{ height: "60px", width: "60px" }} />

                                                </div>

                                                <button className='border mt-2 float-end' data-bs-toggle="modal" data-bs-target="#exampleModal3" >Verfied</button>


                                            </div>
                                            <div class="modal-footer">

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <button className='mt-2 w-100 border bg-danger text-white p-2 rounded'>Save Change</button>
                        </div>
                    </div>
                    <div className='col-4 text-end mt-5 border w-25  h-25'>
                        <img src={IMAGE} className='rounded mx-auto d-block' />
                        <i class="fa-solid fa-camera text-danger fs-2" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal1"></i>
                        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" id="dialog">
                                <div class="modal-content">
                                    <div class="modal-header">

                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <i class="fa-solid fa-photo-film float-start" role="button"></i>
                                        <p className='fs-5' role="button"> Gallery</p>
                                        <i class="fa-solid fa-camera-retro float-start fs-5" role="button"></i>
                                        <p className='fs-5' role="button">Upload Picture</p>
                                        <i class="fa-solid fa-user float-start fs-5" role="button"></i>
                                        <p className='fs-5' role="button">Remove profile</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <Footer />

            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Verfied your number</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <i class="fa-solid fa-circle-check text-success "></i>
                        <p>Your number +918500000023 is <br/>Verfied </p>
                        <Link to="/Myaccounts">
                            <p>Go to Home</p>
                        </Link>
                        </div>
                        <div class="modal-footer">
                            
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Profile