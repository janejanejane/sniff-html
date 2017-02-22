import * as api from '../api';

export const LOGGED_IN = 'LOGGED_IN';
export const SET_REDIRECT_URL = 'SET_REDIRECT_URL';

export const fetchContent = () => {
  return api.login().then( ( response ) => {
    return {
      type: LOGGED_IN,
      isLoggedIn: response,
    };
  } );
};

export const setRedirectUrl = ( currentUrl ) => {
  console.log( __API__ );
  return ( dispatch ) => {
    return {
      type: SET_REDIRECT_URL,
      currentUrl,
    };
  };
};
