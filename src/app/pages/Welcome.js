import React from 'react';
import NavBarContainer from "../components/navBar/NavBarContainer";
import Link from "react-router-dom/es/Link";
import LoginFormContainer from "../components/loginForm/LoginFormContainer";

const Welcome = () => {
    return (
        <div>
            <NavBarContainer>
                <Link to="/" className="navLink">Heyyyy</Link>
                <Link to="/" className="navLink">Budddddyyy</Link>
            </NavBarContainer>
            <LoginFormContainer/>
        </div>
    );
};

export default Welcome;
