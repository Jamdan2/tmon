import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/js/App';
import registerServiceWorker from './production/registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
