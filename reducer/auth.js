import {
  LOGGED_IN,
  SET_REDIRECT_URL,
} from '../action/auth';

const auth = ( state = {}, action ) => {
  switch ( action.type ) {
    case LOGGED_IN:
      return Object.assign(
        {},
        state,
        {
          isLoggedIn: action.isLoggedIn,
        },
      );
    case SET_REDIRECT_URL:
      return Object.assign(
        {},
        state,
        {
          currentUrl: action.currentUrl,
        },
      );
    default:
      return state;
  }
};

export default auth;
