import React from 'react';
import NavBarContainer from "../components/navBar/navBarContainer";
import Link from "react-router-dom/es/Link";

const Welcome = () => {
    return (
        <div>
            <NavBarContainer>
                <ul>
                    <li>
                        <Link to="/" className="navLink">Heyyyy</Link>
                    </li>
                    <li>
                        <Link to="/" className="navLink">Budddddyyy</Link>
                    </li>
                </ul>
            </NavBarContainer>
        </div>
    );
};

export default Welcome;
