import React from 'react'
import './styles/loginSignup.css'

const LoginSignup = () => {
  return (
    <div className="login_signup">
      <div className="loin_signup-container">
        <h1 className='seaction_authHeader'>Sign Up</h1>
        <div className="login_sigupFields">
          <form action="">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email address' />
            <input type="password" placeholder='Password' />
            <button type="submit">Continue</button>
          </form>
          <p className="login_signup-login_txt">Already have an account &nbsp; <span>Login in</span></p>
          <div className="login_signup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup