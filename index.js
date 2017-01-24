import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import MainContainer from './MainContainer';

const store = {
  modal: {
    open: false,
    content: null,
  },
};

render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById( 'app' ),
);
