import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
 
const home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <button className="App-button1">Sign In</button>
        <button className="App-button2">Sign Up</button>
      </div>
    );
}
 
export default home;