import React from 'react';
import "../../../scss/components/LoginForm.scss"
import Link from "react-router-dom/es/Link";

const LoginForm = (props) => {
    return (
        <form id="loginForm" onSubmit={props.onSubmit}>
            <div id="container">
                <div className="headerContainer content">
                    <h1>Login</h1>
                </div>
                <div className="usernameContainer content">
                    <label>Username</label> <br/>
                    <input type="text" placeholder="Username" spellCheck="false" value={props.username} onChange={props.onUsernameChange}/>
                </div>
                <div className="passwordContainer content">
                    <label>Password</label> <br/>
                    <input type="password" placeholder="Password" value={props.password} onChange={props.onPasswordChange}/>
                </div>
                <div className="optionsContainer content">
                    <button type="submit">Submit</button>
                    <Link className="forgotPasswordLink" to="/">Forgot password?</Link>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;