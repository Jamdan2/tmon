import React from 'react';
import {Form, Text} from 'react-form';
import '../../scss/components/Form.css'

const LoginForm = () => (
    <div id="loginForm" className="form">
        <Form>
            { formApi => (
                <form onSubmit={formApi.submitForm}>
                    <div className="header">
                        <h1>Login</h1>
                    </div>
                    <div className="content">
                        <label>Username</label>
                        <Text field="username"/>
                    </div>
                    <div className="content">
                        <label>Password</label>
                        <Text field="password" type="password"/>
                    </div>
                    <div className="content">
                        <button type="submit">Submit</button>
                        <button>Cancel</button>
                    </div>
                </form>
            )}
        </Form>
    </div>
);

export default LoginForm;