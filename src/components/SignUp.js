import React, { Component } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';



export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
    }

    handleSignUp = () => {
        const data = {
            email: this.state.email,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password
        };
        axios.post('http://localhost:8080/user', data)
            .then(response => {
                console.log(response);
            })
    }   

    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h3>Sign Up</h3>

                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" id="firstname" name="firstname"
                        placeholder="First name" onChange={(e) => this.setState({ firstName : e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" id="lastname" name="lastname"
                        placeholder="Last name"  onChange={(e) => this.setState({ lastName : e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="email" name="email"
                        placeholder="Enter email" onChange={(e) => this.setState({ email : e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" name="password"
                        placeholder="Enter password" onChange={(e) => this.setState({ password : e.target.value})}/>
                    </div>

                    <button className="btn btn-primary btn-block" onClick={
                    this.handleSignUp}>Sign Up</button>

                    <p className="forgot-password text-right">
                        Already registered? <NavLink to="/SignIn">Sign In</NavLink>
                    </p>
                </div>
            </div>
        );
    }
}