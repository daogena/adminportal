import React from 'react';
import './App.css';
import Login from './Login';
import Register from './Register'; 
import Support from './Support'; 
import Finance from './Finance'; 
import Sales from './Sales'; 
import HR from './HR'; 
import Tech from './Tech'; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className = "app">
        <Switch>
          <Route exact path = "/" component = {Login}><Login /></Route>
          <Route path = "/Support" component = {Support}><Support /></Route> 
          <Route path = "/Finance" component = {Finance}><Finance /></Route> 
          <Route path = "/Sales" component = {Sales}><Sales /></Route>  
          <Route path = "/HR" component = {HR}><HR /></Route>  
          <Route path = "/Tech" component = {Tech}><Tech /></Route>  
          <Route path = "/Register" component = {Register}><Register /></Route>
        </Switch>
    </div>
    </Router>
  );
}


export default App;
