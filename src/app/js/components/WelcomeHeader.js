import React from 'react';
import PropTypes from "prop-types"
import '../../scss/components/WelcomeHeader.css'

const WelcomeHeader = (props) => {
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

WelcomeHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default WelcomeHeader;