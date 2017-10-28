import React from 'react';
import { Switch, Route } from 'react-router';
import Welcome from './pages/Welcome';
import '../scss/App.css';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Welcome}/>
        </Switch>
    )
};

export default App;
