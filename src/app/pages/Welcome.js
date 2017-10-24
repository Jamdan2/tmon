import React from 'react';
import NavBarContainer from "../components/navBar/navBarContainer";
import Link from "react-router-dom/es/Link";

const Welcome = () => {
    return (
        <div>
            <NavBarContainer>
                <Link to="/" className="navLink">Heyyyy</Link>
                <Link to="/" className="navLink">Budddddyyy</Link>
            </NavBarContainer>
        </div>
    );
};

export default Welcome;
