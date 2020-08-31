import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//import authHeader from './auth-header';

class Budget extends Component {

    //ID: User ID
    //list: list of all budgets for this User
    state = {
        ID: -1,
        list: [],
    }

    //on load fetches all budgets for this user. Email is stored in the local storage.
    componentDidMount= () => {
        this.getUserId(localStorage.getItem("user"))
        .then(result => {
            var userId = result.data.id
            this.setState({ID: userId})
            this.getBudgetList(userId)
            .then(result => {
                console.log(result.data)
            })
        })
    }

    //Get request for user ID using user email
    getUserId(userEmail) {
        return axios.get('http://localhost:8080/user/'+ userEmail)
    }

    //Get request for all budgets for user using state.ID
    getBudgetList(userId) {
        //Get All budgets and populate list
        return axios.get('http://localhost:8080/budget/all/'+ userId)
    }

    render() {
        return(
            <div>
                <h1>Budget Page</h1>
            </div>
        )
    }
}

export default Budget;