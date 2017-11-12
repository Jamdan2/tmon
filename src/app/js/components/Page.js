import React from 'react'
import '../../scss/components/Page.css'

const Page = (props) => {
    return (
        <div id="page">
            {props.children}
        </div>
    );
};

export default Page;