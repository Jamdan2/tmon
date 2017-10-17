import React from 'react';
import "./LoginForm.css"

const LoginForm = (props) => {
    return (
        <div id="loginForm">
            <form onSubmit={props.onSubmit}>
                <div className="header">
                    <h1>Login</h1>
                </div>
                <div className="usernameContainer">
                    <label>Username</label>
                    <input type="text" value={props.username} onChange={props.onUsernameChange}/>
                </div>
                <div className="passwordContainer">
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