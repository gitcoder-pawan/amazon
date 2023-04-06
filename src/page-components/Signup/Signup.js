import React, { useState } from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/amazon-logo-black.png"
import "./signup.css"
const Signup = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', terms_condition:false })
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData(p => {
      return { ...p, [e.target.name]: e.target.value }
    })
  }
  const handleLogin = ()=>{
    navigate('/login');
  }
  const handleCreate = ()=>{
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then(()=>{
      navigate('/login',{state: {email: formData.email, password: formData.password}});
      setError(null);
    })
    .catch(err=>{
      setError(err);
    })
  }
  return (
    <div className="signup">
      <Link to='/'>
        <img className='signup__logo' src={logo} alt="" />
      </Link>
      <div className="signup__container">
        <h2 className='signup__signin'>Sign up</h2>
        {/* <div className='signup__label'>Name</div>
        <input autoComplete='off' type="text"  name='name' value={formData.name} onChange={handleChange} /> */}
        <div className='signup__label'>Email</div>
        <input autoComplete='off' type="email"  name='email' value={formData.email} onChange={handleChange} />
        <div className='signup__label signup__password'>
          <span>Password</span>
          <span onClick={()=>setShow(p=>!p)}>{show ? 'hide': 'show'}</span>
        </div>
          <input autoComplete='off' type={show ? 'text' : 'password'}  name='password' value={formData.password} onChange={handleChange} />
          <button onClick={handleCreate}>create account</button>
          <div className="signup__error">{error?.message || ''}</div>
        
        <div className='signup__termsonditions'>
          <input type="checkbox" name='terms_condition' checked={formData.terms_condition} value={formData.terms_condition} onChange={handleChange}/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est.</p>
        </div>
        <button onClick={handleLogin}>Signin</button>
      </div>
    </div>
  );
}

export default Signup;