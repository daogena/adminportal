import React from 'react'
import { useHistory } from 'react-router-dom'
import './Register.css'

function Register() {
    const history = useHistory(); 

    function handleRedirect() {
        let adminRole = document.getElementById("role-input").value; 
        if (adminRole === 'Support' || adminRole === 'support') {
            history.push("/Support"); 
        }
        else if (adminRole === 'Finance' || adminRole === 'finance') {
            history.push("/Finance"); 
        } 
        else if (adminRole === 'Sales' || adminRole === 'sales') {
            history.push("/Sales"); 
        }
        else if (adminRole === 'HR' || adminRole === 'hr') {
            history.push("/HR")
        }
        else if (adminRole === 'Tech' || adminRole === 'tech') {
            history.push("/Tech")
        }
    }
    function handleClick() {
        handleRedirect(); 
    }
    return (
        <div className = "register-container">
            <h1>Registration</h1>
            <form action="">
                   <input type="text" id="email-input" className="email-container" placeholder="Email"/>
                   <input type="text" id="password-input" className="password-container" placeholder="Password"/>
                   <input type="text" id="role-input" className="role-container" placeholder="Admin role"/>
                   <button className="button" onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}

export default Register