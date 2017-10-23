import React from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div id="navBar">
            {props.children}
        </div>
    )
};

export default NavBar;