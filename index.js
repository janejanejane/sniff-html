import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import MainContainer from './MainContainer';
import modal from './modal';

const reducer = combineReducers( { modal } );

const state = {
  modal: {
    open: false,
    content: null,
  },
};

const store = createStore( reducer, state );

render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById( 'app' ),
);
