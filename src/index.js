import React from 'react';
import ReactDOM from 'react-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import RouterActions from './common/actions';
import reducer from './common/reducers';
import createLogger from 'redux-logger';
import NotFoundComponent from './common/components/NotFoundComponent';
import AppComponent from './common/components/AppComponent';
import HomeContainer from './home/HomeContainer';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
let store = createStore(
    reducer,
    {},
    applyMiddleware(thunk, promise, logger)
);

syncHistoryWithStore(
    createHistory(),
    store
);

browserHistory.listen(location => {
    if (location.action === 'POP') {
        store.dispatch(RouterActions.browserLocationChange(location));
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/placefinder' component={AppComponent}>
                <IndexRoute page='home' component={HomeContainer} />
                {/* <Route path='summary' component={PerformanceSummaryContainer} /> */}
                <Route path='*' component={NotFoundComponent} />
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
);

registerServiceWorker();