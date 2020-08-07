import React, { Component } from "react";
import './App.css';
import { userLoginFetch } from "../services/loginFetch";

class SignIn extends Component{

    constructor(props){
        super(props)

        this.state = {
            email: "12@email.com",
            firstName : "first",
            lastName : "last"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        userLoginFetch(this.state)
    }


    render(){
        return(
        <form onSubmit={this.handleSubmit} >
        <h3>Sign In</h3>

        <div className="form-group">
            <label>Email address</label>
            <input type="email" onChange={this.handleChange} name="email" className="form-control" placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label>Password</label>
            <input type="password" onChange={this.handleChange} name="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
            <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
        </form>
        );
    }
    /*
import { NavLink } from 'react-router-dom';
function SignIn(){
    return(
       
      <form>
      <h3>Sign In</h3>

      <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" placeholder="Enter email" />
      </div>

      <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
      </div>

      <div className="form-group">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
          </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">Submit</button>
      <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
      </p>
      <p className="forgot-password text-right">
        <NavLink to="/SignUp">Sign Up</NavLink>
      </p>
  </form>
    );
    */
}



export default SignIn;