import React from 'react'
import IMAGE from "./IMG/12.png";
import IMAGE1 from "./IMG/download.png";
function Footer() {
    return (
        <div>
            <div className='container-fluid bg-danger  p-5 '>
                <div className="icon">
                    <a href='https://www.facebook.com/henceforthsolutions/'><i class="fa-brands fa-facebook text-white m-1" role="button"></i></a>
                    <a href='https://www.instagram.com/henceforthsolutions/?hl=en'><i class="fa-brands fa-instagram text-white m-1" role="button"></i></a>
                    <a href='https://twitter.com/apphenceforth'><i class="fa-brands fa-twitter text-white m-1" role="button"></i></a>
                    <a href='https://www.youtube.com/watch?v=LfbBSVHcsdI'><i class="fa-brands fa-youtube text-white m-1" role="button"></i></a>
                </div>
                <p className='text-white mt-2'><i class="fa-solid fa-copyright text-white"></i> copyright 2022 HenceForth solution Award -All reserved. <br />Term&conditions</p>
                <div class=""></div>
                <img src={IMAGE} className="imgee m-2" alt="" role="button" />
                <img src={IMAGE1} className="img11" alt="" role="button" />
            </div>
        </div>
    )
}

export default Footer