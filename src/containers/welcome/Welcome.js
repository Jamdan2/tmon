import React, {Component} from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import LoginForm from "../../components/forms/loginForm/LoginForm";
import Modal from "../../components/forms/modal/Modal";

class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            loginFormIsOpen: false,
            signUpFormIsOpen: false
        };
        this.openLoginForm = this.openLoginForm.bind(this);
        this.closeLoginForm = this.closeLoginForm.bind(this);
        this.openSignUpForm = this.openSignUpForm.bind(this);
        this.closeSignUpForm = this.closeSignUpForm.bind(this);
    }

    openLoginForm() {
        this.setState({
            loginFormIsOpen: true
        });
    }

    closeLoginForm() {
        this.setState({
            loginFormIsOpen: false
        });
    }

    openSignUpForm() {
        this.setState({
            signUpFormIsOpen: true
        });
    }

    closeSignUpForm() {
        this.setState({
            signUpFormIsOpen: false
        });
    }

    render() {
        return (
            <div className="Welcome">
                <Modal isOpen={this.state.loginFormIsOpen}>
                    <LoginForm onCancel={this.closeLoginForm}/>
                </Modal>
                <Navbar>
                    <button onClick={this.openLoginForm}>Login</button>
                    <button>Sign Up</button>
                </Navbar>
                <Header>
                    <h1>TMON</h1>
                    <h2>Simple yet powerful tool for managing your sports team.</h2>
                </Header>
            </div>
        );
    }
}

export default Welcome;