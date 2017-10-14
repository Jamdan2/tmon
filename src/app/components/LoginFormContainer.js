import React, { Component } from 'react';
import LoginForm from "./LoginForm";

class LoginFormContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    onChange(e) {

    }

    render() {
        return <LoginForm value={this.state.value} onChange={this.onChange}/>;
    }

}