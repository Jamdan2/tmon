import React from 'react';
import {Form, Text} from 'react-form';
import PropTypes from "prop-types"
import '../../scss/components/Form.css'

const LoginForm = (props) => (
    <div id="loginForm" className="form" style={{margin: "auto"}}>
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
                        <button onClick={props.cancelButtonOnClick}>Cancel</button>
                    </div>
                </form>
            )}
        </Form>
    </div>
);

LoginForm.propTypes = {
    cancelButtonOnClick: PropTypes.func
};

export default LoginForm;