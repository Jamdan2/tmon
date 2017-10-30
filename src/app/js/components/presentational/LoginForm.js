import React from 'react';
import '../../../scss/components/Form.css'
import {Form, Text} from 'react-form'

const LoginForm = () => {
    return (
        <div id="loginForm">
            <Form>
                { formApi => {
                    return (
                        <form onSubmit={formApi.submitForm}>
                            <div className="content headerContent">
                                <h1>Login</h1>
                            </div>
                            <div className="content">
                                <label htmlFor="username">Username</label>
                                <Text field="username"/>
                            </div>
                            <div className="content">
                                <label htmlFor="password">Password</label>
                                <Text type="password" field="password"/>
                            </div>
                        </form>
                    );
                }}
            </Form>
        </div>
    );

};

export default LoginForm;