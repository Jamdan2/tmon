import React from 'react';
import { Switch, Route } from 'react-router';
import WelcomePage from './pages/WelcomePage';
import '../scss/App.css';

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={WelcomePage}/>
        </Switch>
    )
};

export default App;
