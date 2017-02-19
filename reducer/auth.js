import {
  LOGGED_IN,
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
    default:
      return state;
  }
};

export default auth;
