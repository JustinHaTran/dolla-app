import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

// export interface Props {
//     signUpAuthenication: Function;
//     loggedIn: ()=>void
// }

// export interface State {
//     username: string;
//     email?: string;
//     password: string;
//     verifiedPassword: string;
//     error: boolean;
//     redirector: boolean;
// }

export default class SignUp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {value: ''};
    
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //   }
    
    //   handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    //   handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: "",
            password: '',
            error: false,
            redirector: false
        };
    }

    handleSignUp = () =>{
        //#TODO update url to meet api standard

        fetch(`http://localhost:8080/user/`,{
          method: 'POST',
            headers: {
              'accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: this.state.email, firstname: this.state.firstname,
                 lastname: this.state.lastname, password: this.state.password})
          })
          .then((response)=>{
            console.log(response)
            //this.setState({redirector: true})
            //this.props.loggedIn()
          })
          .catch((err)=>{
            console.log(err)
          })
      }

    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" id="firstname" name="firstname"
                     placeholder="First name" onChange={(e) => this.setState({ firstname : e.target.value})}
                      />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" id="lastname" name="lastname"
                     placeholder="Last name"  onChange={(e) => this.setState({ lastname : e.target.value})}/>
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

                <button id="submitButton" type="submit" className="btn btn-primary btn-block" value="submit" onClick={() => {
                this.handleSignUp()}}>Sign Up</button>

                <p className="forgot-password text-right">
                    Already registered? <NavLink to="/SignIn">Sign In</NavLink>
                </p>
            </form>
        );
    }
}