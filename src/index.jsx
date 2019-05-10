import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './routes/Routes';
import { Provider } from 'react-redux';
import store  from './store';

// eslint-disable-next-line no-console
console.log('3');
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('app')
);
