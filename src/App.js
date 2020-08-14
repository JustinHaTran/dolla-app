import React, {Component} from 'react';
import SignIn from './components/SignIn'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Budget from './components/Budget';
import SignUp from './components/SignUp'



class App extends Component {
  render() {
    return ( 
      
      <BrowserRouter>
        <div>
          <Navigation></Navigation>
          <Switch>
          <Route path="/" component={Home} exact/>
            <Route path="/" component={Home} exact/>
              <Route path="/Budget" component={Budget} exact/>
              <Route path="/SignIn" component={SignIn} exact/>
              <Route path="/SignUp" component={SignUp} exact/>
              <Route component={Error}/>
          </Switch>
            
        </div> 
      </BrowserRouter>
     
    );
  }
}

export default App;
