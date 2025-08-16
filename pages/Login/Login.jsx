import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [signstate,setsignstate] = useState("Sign In");
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

const user_auth = async (event) => {
  event.preventDefault();
  try {
    if (signstate === "Sign In") {
      await login(email, password); 
    } else {
      await signup(name, email, password);
      navigate("/Login", { replace: true });
    }
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <div className='login-page'>
      <div className='login-navbar'>
        <img src={logo} className='netflixlogo'></img>
      </div>
      <div className='login-form'>
        <p className='login-form-title'>{signstate}</p>
        {signstate === "Sign Up"?
        <input value={name} onChange={(e)=>{setName(e.target.value)}}
        type='text' className='login-form-input' placeholder='Enter Name'></input>:<></>}
         
        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type='email' className='login-form-input' placeholder='Enter Email'></input> 
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' className='login-form-input' placeholder='Enter Password'></input>
        <button className='login-form-input' id="button" onClick={user_auth} type='submit'>{signstate}</button>
        <div className='login-bottom'>
          <span className='login-bottom-left'><input type='checkbox' className='check'/>Remember Me</span>
          <p>Need Help?</p>
        </div>
        <div className='footer-text-login'>
          
        {
          signstate === "Sign Up" ? (
            <div className='footer-text-2'>
              <span className='footer-text-left'>Already have an account?</span>
              <span className='footer-text-right' onClick={() => setsignstate("Sign In")}>
                Sign In Now
              </span>
            </div>
          ) : (
            <div className='footer-text-1'>
              <span className='footer-text-left'>New to Netflix?</span>
              <span className='footer-text-right' onClick={() => setsignstate("Sign Up")}>
                Sign Up Now
              </span>
            </div>
          )
        }
          
          
        </div>
        
      </div>

    </div>
  )
}

export default Login