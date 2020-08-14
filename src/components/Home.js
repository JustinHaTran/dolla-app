import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
 
const Home = () => {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Dolla
          </p>
        </header>
        <NavLink to="/SignIn"><button className="App-button1">Sign In</button></NavLink>
        <NavLink to="/SignUp"><button className="App-button2">Sign Up</button></NavLink>
      </div>
    );
}
 
export default Home;