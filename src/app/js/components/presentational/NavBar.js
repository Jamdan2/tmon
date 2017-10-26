import React, { Children } from 'react';
import '../../../scss/components/NavBar.css';

const NavBar = (props) => {
    return (
        <div id="navBar">
            <div className="childContainer">
                {props.children}
            </div>
        </div>
    );
};

export default NavBar;