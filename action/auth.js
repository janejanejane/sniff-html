import * as api from '../api';

export const LOGGED_IN = 'LOGGED_IN';

export const fetchContent = () => {
  return api.login().then( ( response ) => {
    return {
      type: LOGGED_IN,
      isLoggedIn: response,
    };
  } );
};
