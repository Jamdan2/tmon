import React from 'react';
import { Switch, Route } from 'react-router';
import Welcome from './pages/Welcome';
import '../scss/App.css';
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <Route path="/login" component={LoginPage}/>
        </Switch>
    )
};

export default App;
