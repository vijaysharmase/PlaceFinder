import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import reducer from './common/reducers';
import logger from 'redux-logger';
import AppComponent from './common/components/AppComponent';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducer, applyMiddleware(thunk, promise, logger));
const history = syncHistoryWithStore(createBrowserHistory(), store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={ history }>
            <AppComponent />
        </Router>
    </Provider>, document.getElementById('root')
);

registerServiceWorker();