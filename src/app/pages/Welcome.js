import React from 'react';
import NavLink from "../components/navBar/NavLink";
import NavBar from "../components/navBar/NavBar";
import WelcomeHeader from "../components/header/WelcomeHeader";

const Welcome = () => {
    return (
        <div id="welcomePage">
            <NavBar>
                <NavLink to="/">Sign Up</NavLink>
                <NavLink to="/">Login</NavLink>
            </NavBar>
            <WelcomeHeader title="TMON" subtitle="Simple yet powerful tool for managing your team."/>
        </div>
    );
};

export default Welcome;
