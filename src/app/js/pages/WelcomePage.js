import React from 'react';
import WelcomeHeader from "../components/presentational/WelcomeHeader";
import NavBar from "../components/presentational/NavBar";
import LoginForm from "../components/presentational/LoginForm";

const WelcomePage = () => {
    return (
        <div id="welcomePage">
            <LoginForm/>
        </div>
    );
};

export default WelcomePage;