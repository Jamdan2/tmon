import React, { Children } from 'react';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <ul id="navBar">
            {Children.map(props.children, (child) => {
                return (
                    <li>
                        {child}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavBar;