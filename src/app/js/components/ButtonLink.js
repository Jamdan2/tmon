import React from 'react';
import Link from "react-router-dom/es/Link";

const ButtonLink = (props) => {
    return (
        <Link id="buttonLink" to={props.to}>
            <button>
                {props.children}
            </button>
        </Link>
    );
};

export default ButtonLink;