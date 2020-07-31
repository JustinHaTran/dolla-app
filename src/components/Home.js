import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import { NavLink } from 'react-router-dom';
 
const home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <NavLink to="/SignIn"><button className="App-button1" onClick={SignIn}>Sign In</button></NavLink>
        <NavLink to="/SignUp"><button className="App-button2">Sign Up</button></NavLink>
      </div>
    );
}
 
export default home;