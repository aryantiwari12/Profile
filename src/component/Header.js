import React from 'react'
import IMAGE from "./IMG/logo.png";
import IMAGE1 from "./IMG/1.png"
import "./CSS/style.css";
function Header() {
  return (
    <div>

      <div className='container-fluid shadow mt-0 d-block'>
        <div className='d-flex justify-content-between'>
            <div className="img1">
                <img src={IMAGE} className="" alt=""/>
            </div>  
            <div className='imglast'>
              <div className="box border shadow mt-2">
                <img src={IMAGE1} className="rounded-circle w-25 border" alt=""/>
                <h5 className="text1 text-danger">Jones Brother</h5>
              </div>
            </div>
            </div>
      </div> 
      
    </div>
  )
}

export default Header;