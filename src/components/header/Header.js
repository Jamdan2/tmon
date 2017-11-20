import React from 'react';
import './Header.css'

const Header = (props) => (
    <div className="Header">
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Header;