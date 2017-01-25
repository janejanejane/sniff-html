import {
  HIDE_MODAL,
  SHOW_MODAL,
} from './action';

const modal = ( state = {}, action ) => {
  console.log( 'in here?', action );
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

export default modal;
