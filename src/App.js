import React, {Component} from 'react';
import logo from './logo.svg';
import SignIn from './components/SignIn'
import {BrowserRouter, Route, Switch, Router} from 'react-router-dom';
import './App.css';
//import './routes.js';

import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Budget from './components/Budget';



class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/SignIn" component={SignIn} exact/>
             <Route path="/Budget" component={Budget} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
     
    );
  }
}

export default App;
