import React from 'react';
import Page from '../components/Page'
import WelcomeHeader from "../components/WelcomeHeader";
import NavBar from "../components/NavBar";
import '../../scss/pages/WelcomePage.css'

const WelcomePage = () => {
    return (
        <Page id="welcomePage">
            <NavBar>
                <button>Sign Up</button>
                <button>Login</button>
            </NavBar>
            <WelcomeHeader title="TMON" subtitle="Simple yet powerful tool for managing your sports team."/>
        </Page>
    );
};

export default WelcomePage;