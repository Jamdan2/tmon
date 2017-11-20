import React from 'react';
import './Navbar.css'

const Navbar = (props) => (
    <div className="Navbar">
        <div className="container">
            {props.children}
        </div>
    </div>
 );

export default Navbar;