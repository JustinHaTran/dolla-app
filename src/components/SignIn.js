import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { NavLink } from 'react-router-dom';
//import authHeader from './auth-header'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSignIn = () => {
        const data = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:8080/signin', data)
            .then(response => {
                if (response.data.JwtToken) {
                    localStorage.setItem("uToken", JSON.stringify(response.data.JwtToken));
                    localStorage.setItem("user", this.state.email)
                    return this.props.history.push('/budget');
                }
                return null;
            });
    }   

    /*
    logout() {
        localStorage.removeItem("user");
    }
    */

    render() {
        return(
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => this.setState({ email : e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => this.setState({ password : e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button className="btn btn-primary btn-block" onClick={this.handleSignIn}>Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="!#">password?</a>
                    </p>
                    <p className="forgot-password text-right">
                        <NavLink to="/SignUp">Sign Up</NavLink>
                    </p>
                </div>
            </div>
        );
    }
}



export default SignIn;