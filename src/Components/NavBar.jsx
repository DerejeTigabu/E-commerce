import React from 'react'
//import {IoSearchSharp} from "react-icons/io5"
function NavBar() {
  return (
    <div className="container">
        <div className="wrapper">
         <div className="left">
            <div className="language">EN</div>
            <div className="search-container">
                <input/>
          <button>search</button>
            </div> 
        </div>           
            <div className="center"> 
              <div className="logo">LOGO</div>
            </div>
           
            <div className="right">
              
              <div className="register">REGISTER</div>
               <div className="signin">SIGN IN</div>
                <div>
                  <div className="mail-icon">MailIcon</div>
                </div>
            
            </div>
        </div>
     
    </div>
  )
}

export default NavBar
 