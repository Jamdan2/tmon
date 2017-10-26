import React from 'react';
import './WelcomeHeader.css'

const Header = (props) => {
    return (
        <div id="welcomeHeader">
            <div className="textContainer">
                <div className="title">
                    <h1>{props.title}</h1>
                </div>
                <div className="subtitle">
                    <h2>{props.subtitle}</h2>
                </div>
            </div>
        </div>
    )
};

export default Header;