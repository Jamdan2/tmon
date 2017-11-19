import React, { Component } from 'react';
import Page from '../components/Page'
import WelcomeHeader from "../components/WelcomeHeader";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import LoginForm from "../components/LoginForm";
import Content from "../components/Content";

class WelcomePage extends Component {
    constructor() {
        super();
        this.state = {
            loginFormVisible: false
        };
        this.openLoginForm = this.openLoginForm.bind(this);
        this.closeLoginForm = this.closeLoginForm.bind(this);
    }

    openLoginForm() {
        this.setState({
            loginFormVisible: true
        })
    }

    closeLoginForm() {
        this.setState({
            loginFormVisible: false
        });
    }

    render() {
        return (
            <Page>
                <Modal visible={this.state.loginFormVisible}>
                    <LoginForm cancelButtonOnClick={this.closeLoginForm}/>
                </Modal>
                <NavBar>
                    <button onClick={this.openLoginForm}>Login</button>
                    <button>Sign Up</button>
                </NavBar>
                <WelcomeHeader title="TMON" subtitle="Simple yet powerful tool for managing your sports team."/>
            </Page>
        );
    }
};

export default WelcomePage;