import React from 'react';
import NavBarContainer from "../components/navBar/NavBarContainer";
import NavLink from "../components/navBar/NavLink";

const Welcome = () => {
    return (
        <div id="welcomePage">
            <NavBarContainer>
                <NavLink className="navLink" to="/">Sign Up</NavLink>
                <NavLink className="navLink" to="/">Login</NavLink>
            </NavBarContainer>
        </div>
    );
};

export default Welcome;
