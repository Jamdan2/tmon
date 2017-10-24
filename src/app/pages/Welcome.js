import React from 'react';
import NavBarContainer from "../components/navBar/NavBarContainer";
import LoginFormContainer from "../components/loginForm/LoginFormContainer";
import NavLink from "../components/navBar/NavLink";

const Welcome = () => {
    return (
        <div id="welcomePage">
            <NavBarContainer>
                <NavLink className="navLink" to="/">Hello</NavLink>
                <NavLink className="navLink" to="/">World</NavLink>
            </NavBarContainer>
            <LoginFormContainer/>
        </div>
    );
};

export default Welcome;
