import React from 'react'
import {useHistory} from 'react-router-dom';
import './Login.css'; 


function Login() {
    const history = useHistory(); 
    function handleClick() {
        history.push("/Tech"); 
    }
    function register() {
        history.push("/Register"); 
    }
    return (
        <div>
           <div className="login-container">
               <div className="title">LOGIN</div>
               <form action="">
                   <input type="text" className="email-container" placeholder="Email"/>
                   <input type="text" className="password-container" placeholder="Password"/>
                   <button className="button" onClick={handleClick}>Submit</button>
                   <button className="button" onClick={register}>Register</button>
               </form>
           </div>
         </div>
    )
}

export default Login
