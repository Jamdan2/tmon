import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => (
    <div className="Modal" style={{display: props.isOpen ? "inline-block" : "none"}}>
        <div className="animate">
            {props.children}
        </div>
    </div>
);

Modal.propTypes = {
    isOpen: PropTypes.bool
};

export default Modal;