import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

import MainContainer from './MainContainer';
import modal from './modal';

const reducer = combineReducers( { modal } );

const state = {
  modal: {
    open: false,
    content: null,
  },
};

const store = createStore(
  reducer,
  state,
  compose(
    applyMiddleware(
      createLogger(),
    ),
  ),
);

render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById( 'app' ),
);
