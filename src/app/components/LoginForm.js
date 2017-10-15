import React, { Component } from 'react';

const LoginForm = (props) => {
    return (
        <div id="loginForm">
            <form onSubmit={props.onSubmit}>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" value={props.username} onChange={props.onUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={props.password} onChange={props.onPasswordChange}/>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;