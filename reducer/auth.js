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
          open: false,
          content: action.content,
        },
      );
    default:
      return state;
  }
};

export default auth;
