import React from 'react';
import WelcomeHeader from "../components/presentational/WelcomeHeader";
import WelcomeNavBar from "../components/presentational/WelcomeNavBar";

const Welcome = () => {
    return (
        <div id="welcomePage">
            <WelcomeNavBar/>
            <WelcomeHeader title="TMON" subtitle="Simple yet powerful tool for managing your team."/>
        </div>
    );
};

export default Welcome;