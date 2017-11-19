import React from 'react';
import "../../scss/components/Content.css"

const Content = (props) => {
    return (
        <div className="Content">
            {props.children}
        </div>
    );
};

export default Content;