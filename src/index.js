import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-reduc';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.css';

// run app
ReactDOM.render(
    <Router>
        <Provider store={store}>
        <App />
        </Provider>
    </Router>,
     document.getElementById('root')
);