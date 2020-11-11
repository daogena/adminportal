import React from 'react'
import {BrowserRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';
import {Redirect} from "react-router-dom";
import './Login.css'; 
import Register from './Register';


function Login() {
 
    return (
        <div>
           <div className="login-container">
               <div className="title">LOGIN</div>
               <form action="">
                   <input type="text" className="email-container" placeholder="Email"/>
                   <input type="text" className="password-container" placeholder="Password"/>
                   <button className="button">Submit</button>
               </form>
           </div>
         </div>
    )
}

export default Login
