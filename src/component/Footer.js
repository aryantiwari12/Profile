import React from 'react'
import IMAGE from "./IMG/12.png";
import IMAGE1 from "./IMG/download.png";
function Footer() {
    return (
        <div>
            <div className='container-fluid bg-danger  p-5 '>
                <div className="icon">
                    <i class="fa-brands fa-facebook text-white m-1"></i>
                    <i class="fa-brands fa-instagram text-white m-1"></i>
                    <i class="fa-brands fa-twitter text-white m-1"></i>
                    <i class="fa-brands fa-youtube text-white m-1"></i>
                </div>
                <p className='text-white mt-2'><i class="fa-solid fa-copyright text-white"></i> copyright 2022 HenceForth solution Award -All reserved. <br/>Term&conditions</p>
                <div class=""></div>
                <img src={IMAGE} className="imgee m-2" alt=""/>
                <img src={IMAGE1} className="img11" alt=""/>
            </div>
        </div>
    )
}

export default Footer