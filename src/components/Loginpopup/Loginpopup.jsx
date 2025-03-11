import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setShowLogin}) => {
  const [currstate,setcurrstate] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currstate}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currstate==="Login"?<></>: <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currstate==="Sign Up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy policy.</p>
        </div>
        {currstate==="Login"
        ?<p>Create a new account? <span onClick={()=>setcurrstate("Sign Up")}>Click-here</span></p>
        : <p>Already have an account? <span onClick={()=>setcurrstate("Login")}>Login here</span></p>}
        
       
      </form>
    </div>
  )
}

export default Loginpopup