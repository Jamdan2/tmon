import React from 'react';
import './Header.css'

const Header = (props) => {
    return (
        <div id="header">
            {props.children}
        </div>
    )
};

export default Header;