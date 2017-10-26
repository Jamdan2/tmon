import React from 'react';
import NavLink from "../components/presentational/ButtonLink";
import NavBar from "../components/presentational/NavBar";
import WelcomeHeader from "../components/presentational/WelcomeHeader";

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
