import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
//import './routes.js';

import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';



class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
     
    );
  }
}

export default App;
