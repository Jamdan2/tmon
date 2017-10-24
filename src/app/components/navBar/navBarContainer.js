import React, { Component } from 'react';
import NavBar from "./NavBar";

class NavBarContainer extends Component {

    render() {
        return <NavBar>
            {this.props.children}
        </NavBar>;
    }
    
}

export default NavBarContainer;