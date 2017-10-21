import React from 'react';
import LoginFormContainer from "../components/loginForm/LoginFormContainer";
import NavBarContainer from "../components/navBar/navBarContainer";

const Welcome = () => {
    return (
        <div>
            <NavBarContainer/>
            <LoginFormContainer/>
        </div>
    );
};

export default Welcome;
