import React, { useState } from "react";
import './Login.css'
import { Link, useNavigate } from "react-router-dom"
import logo from './images/Amazon-Logo.jpg'
import { auth } from './Firebase';



function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        //some fancy firebase login .....
    }

    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
            })
            .catch(error => alert(error.message))
    } 

    return (
        <div className='login'>
            <Link to= '/'>
                <img className='login__logo' src={logo} alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h4>E-mail</h4>
                    <input 
                    type='text' value={email} onChange={e => 
                        setEmail
                        (e.target.value)} 
                        />

                    <h4>Password</h4>
                    <input 
                    type='password' value={password} onChange={e => 

                        setPassword

                        (e.target.value)} 
                    />
                    
                    <button 
                    type='submit' 
                    onClick={signIn}
                    className='login__signInButton'>Sign-in</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please see your Privacy Notice, our Cookies Notice and out Interest_Based Ads Notice.
                </p>
                <button 
                onClick={register}
                className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;
