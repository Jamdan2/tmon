import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import Welcome from "../welcome/Welcome";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Welcome}/>
                </Switch>
            </div>
        );
    }
}

export default App;
