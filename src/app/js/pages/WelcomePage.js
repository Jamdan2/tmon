import React from 'react';
import WelcomeHeader from "../components/WelcomeHeader";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

const WelcomePage = () => {
    return (
        <div id="welcomePage">
            <div className="pop-ups">
                <LoginForm/>
            </div>
            <div className="main">
                <NavBar>
                    <button>Sign Up</button>
                    <button>Login</button>
                </NavBar>
                <WelcomeHeader title="TMON" subtitle="Simple yet powerful tool for managing your sports team."/>
            </div>
        </div>
    );
};

export default WelcomePage;