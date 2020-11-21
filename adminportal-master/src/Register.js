import React from 'react'
import { withRouter } from 'react-router-dom'
import './Register.css'

class Register extends React.Component {
    state = {
        email: "",
        password: "",
        role: ""
    }

    emailInputHandler = (e) => {    
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }
    passwordInputHandler = (e) => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }
    roleInputHandler = (e) => {
        e.preventDefault();
        this.setState({
            role: e.target.value
        })
    }

    formHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/api/user",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password,
                adminRole: this.state.role
            })
        })
        let role = this.state.role; 
        if (role === 'Support' || role === 'support') {
            this.props.history.push("/Support")
        }
        else if (role === 'Finance' || role === 'finance') {
            this.props.history.push("./Finance")
        }
        else if (role === 'Sales' || role === 'sales') {
            this.props.history.push("./Sales")
        } 
        else if (role === 'HR' || role === 'hr') {
            this.props.history.push("./HR")
        }
        else if (role === 'Tech' || role === 'tech') {
            this.props.history.push("./Tech")
        }
    }
    
    render(){
        return (
            <div className = "register-container">
                <div className="title">REGISTER</div>
                <form action="" onSubmit={this.formHandler}>
                       <input type="text" id="email-input" className="email-container" placeholder="Email" onChange={this.emailInputHandler}/>
                       <input type="password" id="password-input" className="password-container" placeholder="Password" onChange={this.passwordInputHandler}/>
                       <input type="text" id="role-input" className="role-container" placeholder="Admin role" onChange={this.roleInputHandler}/>
                       <button className="button">Submit</button>
                </form>
            </div>
        )
    }
    
}

export default withRouter(Register)