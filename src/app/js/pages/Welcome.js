import React from 'react';
import WelcomeHeader from "../components/presentational/WelcomeHeader";
import NavBar from "../components/presentational/NavBar";

const Welcome = () => {
    return (
        <div id="welcomePage">
            <NavBar>
                <button>Sign Up</button>
                <button>Login</button>
            </NavBar>
            <WelcomeHeader title="TMON" subtitle="Simple yet powerful tool for managing your team."/>
        </div>
    );
};

export default Welcome;