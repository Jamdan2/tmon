import React, { Component, Children } from 'react';
import "../../scss/components/Modal.css";

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            display: "none"
        };
    }

    componentDidUpdate() {
        if (this.props.visible && this.state.display !== "inline-block") this.setState({
            display: "inline-block"
        });
        if (!this.props.visible && this.state.display === "inline-block") this.setState({
            display: "none"
        })
    }

    render() {
        return (
            <div className="Modal" style={{display: this.state.display}}>
                <div className="animate">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Modal;