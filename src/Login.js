import React,{ useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const emailOnChange=(e) => setEmail(e.target.value)
    return (
        <div className='login'>
            <Link to= '/'>
            <img className ='login__logo' src ='https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg'
                alt=""/>
            </Link>
            <div className='login__container'>
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange = {emailOnChange}/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button className='login__signInButton'>Sign In</button>
                </form>
                <button className='login__registerButton'>Create Your Account</button>
            </div>
        </div>
    )
}

export default Login
