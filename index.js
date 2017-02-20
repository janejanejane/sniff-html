import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import DashboardContainer from './DashboardContainer';
import LoginContainer from './LoginContainer';
import MainContainer from './MainContainer';
import RestrictedPagesContainer from './RestrictedPagesContainer';
import auth from './reducer/auth';
import modal from './modal';

const reducer = combineReducers( { auth, modal } );

const middlewares = [thunk];

if ( process.env.NODE_ENV !== 'production' ) {
  middlewares.push( createLogger() );
}

const store = createStore(
  reducer,
  applyMiddleware( ...middlewares ),
);

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={MainContainer} />
      <Route path="login" component={LoginContainer} />
      <Route component={RestrictedPagesContainer}>
        <Route path="dashboard" component={DashboardContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById( 'app' ),
);
