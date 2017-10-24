import React from 'react';
import NavLink from "../components/navBar/NavLink";
import NavBar from "../components/navBar/NavBar";

const Welcome = () => {
    return (
        <div id="welcomePage">
            <NavBar>
                <NavLink className="navLink" to="/">Sign Up</NavLink>
                <NavLink className="navLink" to="/">Login</NavLink>
            </NavBar>
        </div>
    );
};

export default Welcome;
