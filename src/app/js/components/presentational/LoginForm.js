import React from 'react';
import "../../../scss/components/LoginForm.scss"
import Link from "react-router-dom/es/Link";

const LoginForm = (props) => {
    return (
        <form id="loginForm" onSubmit={props.onSubmit}>
            <div id="container">
                <div id="header" className="content">
                    <h1>Login</h1>
                </div>
                <div id="usernameContent" className="content">
                    <label>Username</label> <br/>
                    <input type="text" placeholder="Username" spellCheck="false" value={props.username} onChange={props.onUsernameChange}/>
                </div>
                <div id="passwordContent" className="content">
                    <label>Password</label> <br/>
                    <input type="password" placeholder="Password" value={props.password} onChange={props.onPasswordChange}/>
                </div>
                <div id="optionContent" className="content">
                    <button type="submit">Submit</button>
                    <Link id="forgotPasswordLink" to="/">Forgot password?</Link>
                </div>
            </div>
        </form>
    );
};

export default LoginForm;