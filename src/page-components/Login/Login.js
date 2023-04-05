import React, { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../../assets/amazon-logo-black.png"
import "./login.css"
const Login = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', terms_condition:false })

  const handleChange = (e) => {
    setFormData(p => {
      return { ...p, [e.target.name]: e.target.value }
    })
  }
  return (
    <div className="login">
      <Link to='/'>
        <img className='login__logo' src={logo} alt="" />
      </Link>
      <div className="login__container">
        <h2 className='login__signin'>Sign in</h2>
        <div className='login__label'>Email</div>
        <input type="text"  name='email' value={formData.email} onChange={handleChange} />
        <div className='login__label login__password'>
          <span>Password</span>
          <span onClick={()=>setShow(p=>!p)}>{show ? 'hide': 'show'}</span>
        </div>
          <input type={show ? 'text' : 'password'}  name='password' value={formData.password} onChange={handleChange} />
        <button>Signin</button>
        <div className='login__termsonditions'>
          <input type="checkbox" name='terms_condition' checked={formData.terms_condition} value={formData.terms_condition} onChange={handleChange}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.</p>
        </div>
        <button>create account</button>

      </div>
    </div>
  );
}

export default Login