import React, { Component } from 'react';
import LoginForm from "./LoginForm";

class LoginFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event) {
        alert("username: " + this.state.username + ", password: " + this.state.password );
        event.preventDefault()
    }

    render() {
        return <LoginForm
            username={this.state.username}
            onUsernameChange={this.handleUsernameChange}
            password={this.state.password}
            onPasswordChange={this.handlePasswordChange}
            onSubmit={this.handleSubmit}
        />;
    }

}

export default LoginFormContainer;