import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css"
import loginDetails from "../../Jsondata/credentials.json"

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const onChangeEmail = event => {
        setEmail(event.target.value);
    }
    
    const onChangePassword = event => {
        setPassword(event.target.value);
    }

    

    const submitForm = (event) => {
        event.preventDefault();
        if (email === loginDetails.email && password === loginDetails.password) {
            navigate('/dashboard');
        }
      };

    
    return <div className = "login-background">
        <div className ="form-card">
            <div className="logo">
            <div className='line'>
            </div>
            <h1 className = "logo-name">CRUD OPERATIONS</h1>
            </div>
            <form className="form-style" onSubmit={submitForm}>
            <h1 className ="signin-text">SIGN IN</h1>
            <p className = "form-description">Enter your credentials to access your account</p>
            <div className ="input-container">
                <p className = "input-label">Email</p>
                <input type = "text" className="input" placeholder = "Enter your email" value={email} onChange={onChangeEmail}/>
            </div>
            <div className ="input-container">
                <p className = "input-label">Password</p>
                <input type = "password" className="input" placeholder = "Enter your password" value={password} onChange={onChangePassword}/>
            </div>
            <button className = "signin-button" type = "submit">SIGN IN</button>
            <p className="forget-text">Forgot your password?<span className = "form-span"> Reset Password</span></p>
            </form>
        </div>
    </div>
    }

export default LoginPage