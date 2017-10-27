import React from 'react';
import NavBar from "./NavBar";
import NavLink from "./ButtonLink";

const WelcomeNavBar = () => {
    return(
        <NavBar id="welcomeNavBar">
            <NavLink to="/sign-up">Sign Up</NavLink>
            <NavLink to="/login">Login</NavLink>
        </NavBar>
    );
};

export default WelcomeNavBar;