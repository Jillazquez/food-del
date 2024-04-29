import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {

  const [currState,setCurreState] = useState("LogIn")

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your Password' required />
        </div>
        <button>{currState==="Sign Up"?"Create account":"Log In"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==="Login"
        ?<p>Create  a new account? <span onClick={()=>setCurreState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurreState("Login")}>Login here</span></p>
      }

      </form>
    </div>
  )
}

export default Loginpopup