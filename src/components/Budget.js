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
            //console.log(userId)
        
        // .then(result => this.setState({ID: result.data.id}))

        // this.getBudgetList(this.state.ID)
        //     .then(res => this.setState({ list: res.data}))
    }
    getUserId(userEmail) {
        return axios.get('http://localhost:8080/user/'+ userEmail)
    }

    getBudgetList(userId) {
        //Get All budgets and poopulate list
        return axios.get('http://localhost:8080/budget/all/'+ userId)
    }

    render() {
        return(
            <div>
                <h1>Budget Page</h1>
                <button type="button" className="btn btn-primary">GetBudgets</button>
            </div>
        )
    }
}

export default Budget;