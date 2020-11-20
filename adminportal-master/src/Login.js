import React from 'react'
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';
import './Login.css'; 
import Support from './Support.js'
import Finance from './Finance.js'
import Sales from './Sales.js'
import HR from './HR.js'
import Technology from './Tech.js'

function Login() {
 
    return (
        <Router>
        <div>
           <div className="login-container">
                <h1>Login</h1>
               <form action="">
                   <input type="text" className="email-container" placeholder="Email"/>
                   <input type="text" className="password-container" placeholder="Password"/>
                   <button className="button" onClick = "/Support" >Submit</button>
               </form>
           </div>
        <Switch>
          <Route path = "/Support" component = {Finance}><Support /></Route>
          <Route path = "/HR" component = {HR}><HR/></Route>
          <Route path = "/Sales" component = {Sales}><Sales/></Route>
          <Route path = "/Technology" component = {Technology}><Technology/></Route>
        </Switch>
         </div>
         </Router>
    )
}

function Child(){
let {id} = useParams();
    return (
    <div>
        
    </div>
    )
}

export default Login
