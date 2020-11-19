import React, { Component } from 'react'
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: ''}
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        alert('Login submitted: ' + this.state);

        axios.get('http://localhost:2000/login', {
            method: 'POST',
            body: JSON.stringify(this.state)
        }).then((req, res) => {
            console.log(res.JSON)
        }).catch(err => {
            console.log(err.JSON)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="username">
                        Username:
                        <input type="text" name="username" id="username" value={ this.state.value } onChange={ this.handleChange }/>
                    </label>
                    <label htmlFor="password">
                        Password:
                        <input type="text" name="password" id="password"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
