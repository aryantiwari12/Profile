import React from 'react'
import Footer from './Footer';
import Header from './Header';
import IMAGE from "./IMG/1.png";
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Profile() {


    const base_url="http://139.59.47.49:4004";  // MAIN API

    
  
    const [code,setcode]=useState("")

    const [profiledata,setprofiledata]=useState({
        first_name:" ", 
        mobile_number:" ",
        address:" ",
        profile_image:" ",
        email:" "

    })
    const [verifiedotp,setverfiedotp]=useState({
           
        input:"",
        input1:"",
        input2:"",
        input3:""
    })

    const Changeingvalue = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setprofiledata({
            ...profiledata,
            [name]: value
        })

        setverfiedotp({
            ...verifiedotp,
            [name]:value
        })
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

    let inputRef4 = useRef(null)
    let inputRef5 = useRef(null)
    let inputRef6 = useRef(null)
    let inputRef7 = useRef(null)



    const changename=()=>{
        inputRef4.current.value=''
    }

    const ChangeLocation=()=>{
        inputRef5.current.value='';
    }


    const ChangeEmail=()=>{
        inputRef6.current.value='';
    }
 
    const Changemobile=()=>{
        inputRef7.current.value='';
    }

  
    

    

    const Savename = async () => {
       
        const data = {
            first_name:profiledata.first_name
        }
        let res = axios.put(`http://139.59.47.49:4004/api/edit-profile`,data, {

            headers: {
                'Authorization': localStorage.getItem("token")
            }
            
            
        })
        console.log(res)
    }

     const SaveLocation=async()=>{
        const data={
            address:profiledata.address
        }
        let res=axios.put(`http://139.59.47.49:4004/api/edit-profile`,data,{
            headers:{
                'Authorization': localStorage.getItem("token")
            }
        })
        console.log(res)
     }

    const SaveEmail=async()=>{
        const data={
            email:profiledata.email
        }
        let res= await axios.put(`http://139.59.47.49:4004/api/edit-profile`,data,{
            headers:{
                'Authorization': localStorage.getItem("token")
            }
        })
        console.log(res)
    }

    const verified= async ()=>{

        const data={
            mobile_number:profiledata.mobile_number,
            country_code:code
        }
            
        let response=await axios.post(`http://139.59.47.49:4004/api/account/send/otp`,data,{
           headers:{
            'Authorization': localStorage.getItem("token")
           }
        })
        console.log(response)
    }

    const mobilenumbervalidation=()=>{
        let mobilechack=/^[789][0-9]{8}$/;
        document.getElementById("span1").style.display = "none"
        document.getElementById("span2").style.display = "block"
        if (mobilechack.test(profiledata.mobile_number)) {

            document.getElementById("span2").innerHTML = "your mobile is valid";
            document.getElementById("span2").style.color = "green";
        }
        else {

            document.getElementById("span2").innerHTML = "your mobile is invalid";
            document.getElementById("span2").style.color = "red";
            return false;
        }

    }


   



    const Verifiedotpdata=async()=>{
        const {input,input1,input2,input3}=verifiedotp
        const data={
            mobile_number:profiledata.mobile_number,
            otp:`${input}${input1}${input2}${input3}`
        }
        let res=await axios.post(`http://139.59.47.49:4004/api/account/verify/otp`,data,{
            headers:{
                'Authorization': localStorage.getItem("token")
            }
        })
        console.log(res)
     }

    const Savechangedata=async()=>{

        const data={
            first_name:profiledata.first_name,
            mobile_number:profiledata.mobile_number,
            address:profiledata.address,
            email:profiledata.email
        }
        
        let res=await axios.put(`http://139.59.47.49:4004/api/edit-profile`,data,{
            headers:{
                'Authorization': localStorage.getItem("token")
            }
        })
        console.log(res)

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
                            <div className=' border mt-2 p-2'>
                                <label>Name</label>
                                <p className='text-danger'>Cancel</p>
                                <input type="text" ref={inputRef4} value={profiledata.first_name} name="first_name" className="form-control mt-2" alt='' onChange={Changeingvalue} />
                                <button className='text-danger border bg-white' onClick={changename}>Change</button>
                                <button className='bg-danger border text-white mt-2' onClick={Savename}>Save</button>
                            </div>
                        </div>
                        <div className='formdata'>
                            <div className=' border mt-2 p-2'>
                                <label>Location</label>
                                <p className='text-danger'>Cancel</p>
                                <input type="text" ref={inputRef5} value={profiledata.address} name="address" onChange={Changeingvalue}  className="form-control mt-2"   alt='' />
                                <button className='text-danger border bg-white'  onClick={ChangeLocation}>Change</button>
                                <button className='bg-danger border text-white mt-2' onClick={SaveLocation}>Save</button>
                            </div>
                        </div>
                        <div className='formdata'>
                            <div className=' border mt-2 p-2'>
                                <label>Email</label>
                                <p className='text-danger'>Cancel</p>
                                <input type="text" ref={inputRef6} value={profiledata.email} name="email" className="form-control mt-2" alt='' onChange={Changeingvalue}/>
                               
                                <button className='text-danger border bg-white' onClick={ChangeEmail}>Change</button>
                                <button className='bg-danger border text-white mt-2' onClick={SaveEmail} >Save</button>
                            </div>
                        </div>
                        <div className='formdata'>
                            <div className=' border mt-2 p-2'>
                                <label>Mobile Number</label>
                                <p className='text-danger'>Cancel</p>
                                <input type="text" placeholder="India(+91)" id="countycode1"  onChange={(e)=>setcode(e.target.value)} className="form-control mt-2" alt='' />
                                <div class="input-group mb-3 mt-2">
                                    <span class="input-group-text">+91</span>

                                    <input type="text" ref={inputRef7}  id="mobile1" value={profiledata.mobile_number}   name="mobile_number" class="form-control" aria-label="Dollar amount (with dot and two decimal places)" onChange={Changeingvalue}/><br/>
                                    <br/> <span className='text-start' id="span2"></span>
                                </div>
                                <button className='text-danger border bg-white' onClick={Changemobile}>Change</button>
                                <button className='bg-danger border text-white mt-2'  data-bs-toggle="modal" data-bs-target="#exampleModal2"  onClick={verified}>Verify</button>
                                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title1" id="exampleModalLabel">Confirm your number</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body p-5">
                                                <h4 className='fs-6 text-center'>Enter the just send to</h4>
                                                <h4 className='text-center fs-6'>+91{profiledata.mobile_number}</h4>
                                                <div className='row mt-2'>
                                                    <input ref={inputRef} value={verifiedotp.input} className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e)=>{onClick(e.target.value);Changeingvalue(e)}} name="input"  style={{ height: "60px", width: "60px" }} />
                                                    <input ref={inputRef1} value={verifiedotp.input1} name="input1" autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) =>{onClick1(e.target.value);Changeingvalue(e)}} style={{ height: "60px", width: "60px" }} />
                                                    <input ref={inputRef2}  value={verifiedotp.input2} name="input2" autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) => {onClick2(e.target.value);Changeingvalue(e)}} style={{ height: "60px", width: "60px" }} />
                                                    <input ref={inputRef3} value={verifiedotp.input3} name="input3" autoFocus className='col-3 border border-2 ms-4 text-center d-flex justify-content-center align-items-center' maxLength="1" onChange={(e) =>{onClick3(e.target.value);Changeingvalue(e)}} style={{ height: "60px", width: "60px" }} />

                                                </div>

                                                <button className='border mt-2 float-end' data-bs-toggle="modal" data-bs-target="#exampleModal4" onClick={Verifiedotpdata} >Verfied</button>
                                                {/* #exampleModal3 */}
   
                                            </div>
                                            <div class="modal-footer">

                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <button className='mt-2 w-100 border bg-danger text-white p-2 rounded' onClick={Savechangedata}>Save Change</button>
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
                        <p>Your number  is <br/>Verfied </p>
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