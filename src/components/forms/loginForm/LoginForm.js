import React from 'react';
import {Form, Text} from 'react-form';
import PropTypes from 'prop-types';
import '../Form.css';

const LoginForm = (props) => (
    <div className="LoginForm form">
        <Form onSubmit={props.onSubmit}>
            {formApi => (
                <form onSubmit={formApi.submitForm}>
                    <div className="header">
                        <h1>Login</h1>
                    </div>
                    <div className="content">
                        <label>Username</label>
                        <Text field="username" spellcheck="false"/>
                    </div>
                    <div className="content">
                        <label>Password</label>
                        <Text field="password" type="password"/>
                    </div>
                    <div className="content">
                        <button type="submit">Submit</button>
                        <button onClick={props.onCancel}>Cancel</button>
                    </div>
                </form>
            )}
        </Form>
    </div>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
};

export default LoginForm;