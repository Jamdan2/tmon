import React from 'react';
import Link from "react-router-dom/es/Link";

const NavLink = (props) => {
    return (
        <Link id="navLink" to={props.to}>
            <button className="navLink">
                {props.children}
            </button>
        </Link>
    );
};

export default NavLink;