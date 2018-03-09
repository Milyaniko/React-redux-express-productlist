import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app/containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import './app/styles/css/App.css';
import store from './app/store';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
