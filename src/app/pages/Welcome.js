import React from 'react';
import LoginFormContainer from "../components/loginForm/LoginFormContainer";
import NavBarContainer from "../components/navBar/navBarContainer";
import Header from "../components/header/Header";

const Welcome = () => {
    return (
        <div>
            <NavBarContainer/>
            <Header>
                <LoginFormContainer/>
            </Header>
        </div>
    );
};

export default Welcome;
