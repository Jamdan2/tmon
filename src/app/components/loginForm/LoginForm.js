import React from 'react';
import "./LoginForm.css"
import Link from "react-router-dom/es/Link";

const LoginForm = (props) => {
    return (
        <div id="loginForm">
            <div id="container">
                <form onSubmit={props.onSubmit}>
                    <div className="content">
                        <h1>Login</h1>
                    </div>
                    <div className="content">
                        <input type="text" placeholder="Username" value={props.username} onChange={props.onUsernameChange}/>
                    </div>
                    <div className="content">
                        <input type="password" placeholder="Password" value={props.password} onChange={props.onPasswordChange}/>
                    </div>
                    <div className="content">
                        <button type="submit">Submit</button>
                        <Link to="/" id="forgotPasswordLink">Forgot password?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;