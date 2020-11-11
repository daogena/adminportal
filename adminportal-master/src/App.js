import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register'; 
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className = "app">
      <nav>
        <ul className = "navbar">
          <li>
            <Link to = "/" exact>Home</Link>
          </li>
          <li>
            <Link to = "/Login">Login</Link>
          </li>
          <li>
            <Link to = "/Register">Register</Link>
          </li>
        </ul>
        </nav>

        <Switch>
          <Route exact path = "/"></Route>
          <Route path = "/Login" component = {Login}><Login /></Route>
          <Route path = "/Register" component = {Register}><Register /></Route>
        </Switch>
    </div>
    </Router>
  );
}


export default App;
