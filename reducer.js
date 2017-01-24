import {
  HIDE_MODAL,
  SHOW_MODAL,
} from './action';

const reducer = ( state = {}, action ) => {
  switch ( action.type ) {
    case HIDE_MODAL:
      return Object.assign(
        {},
        state,
        {
          modal: {
            open: false,
            content: action.content,
          },
        },
      );
    case SHOW_MODAL:
      return Object.assign(
        {},
        state,
        {
          modal: {
            open: false,
            content: action.content,
          },
        },
      );
    default:
      return state;
  }
};

export default reducer;
