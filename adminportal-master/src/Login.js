import React from 'react'
import { withRouter } from 'react-router-dom';
import './Login.css'; 


class Login extends React.Component {
    state = {
        email: '',
        password: ''
    };

    register = () => {
        this.props.history.push("/Register") 
    }
    emailInputHandler = (e) => {
        this.setState({
            email: e.target.value,
        })
    }
    passwordInputHandler = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    loginHandler = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/api/user/login",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                username: this.state.email,
                password: this.state.password
            })
        }).then(data => {
            return data.json()
        }).then(data => {
            let role = data.user.adminRole
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
        })
    }

    render(){
        return (
            <div>
               <div className="login-container">
                   <div className="title">LOGIN</div>
                   <form action="" onSubmit={e => this.loginHandler(e)}>
                       <input type="text" className="email-container" placeholder="Email" onChange={this.emailInputHandler}/>
                       <input type="password" className="password-container" placeholder="Password" onChange={this.passwordInputHandler}/>
                       <button className="button" onClick={this.handleClick}>Submit</button>
                       <button className="button" onClick={this.register}>Register</button>
                   </form>
               </div>
             </div>
        )
    }
    
}

export default withRouter(Login)