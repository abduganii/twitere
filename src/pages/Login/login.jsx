import { useRef } from "react";
import "./login.css"

import logo1 from "../../img/twitter-logo.png";


import useAuth from "../../hooks/useAuth";

function Login() {
    const [setToken]= useAuth(false)

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleLogin = evt => {
    
        evt.preventDefault();
        
        const obj = {
            username: usernameRef.current.value
        }
        
     
        
        setToken(obj)
    }

    




    return (
        <div>
            <img className="logo" src={logo1} width="40" />
           <h2 className="login-h2">Log in to Twitter</h2>
           <form onSubmit={handleLogin}>
                <input   className="login-input" ref= {usernameRef}  type="text" placeholder="Phone number, email address" required />
                <input className="login-input" ref={passwordRef} type="password" placeholder="password" required />
                <button className="login-btn">Log In</button>
            </form>
            <div className="span-div">
                <a href="#" className="login-span">Forgot password?</a>
                <a href="/singup" className="login-span">Sign up to Twitter</a>
            </div>
        </div>
    )
}

export default Login;