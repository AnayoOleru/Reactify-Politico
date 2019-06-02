import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/Routes';
import { Provider } from 'react-redux';
import store  from './store';

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById('app')
);
