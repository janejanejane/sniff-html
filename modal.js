import {
  HIDE_MODAL,
  SHOW_MODAL,
} from './action';

const modal = ( state = {}, action ) => {
  switch ( action.type ) {
    case HIDE_MODAL:
      return Object.assign(
        {},
        state,
        {
          open: false,
          content: action.content,
        },
      );
    case SHOW_MODAL:
      return Object.assign(
        {},
        state,
        {
          open: true,
          content: action.content,
        },
      );
    default:
      return state;
  }
};

export default modal;
