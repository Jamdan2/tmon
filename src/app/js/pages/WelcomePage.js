import React from 'react';
import WelcomeHeader from "../components/WelcomeHeader";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";

const WelcomePage = () => {
    return (
        <div id="welcomePage">
            <LoginForm/>
        </div>
    );
};

export default WelcomePage;