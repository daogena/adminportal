import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className = "register-container">
            <h1>Registration</h1>
            <form action="">
                   <input type="text" className="email-container" placeholder="Email"/>
                   <input type="text" className="password-container" placeholder="Password"/>
                   <button className="button">Submit</button>
            </form>
        </div>
    )
}

export default Register