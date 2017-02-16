import * as api from './api';

export const FETCH_CONTENT = 'FETCH_CONTENT';
export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

export const toggleModal = ( status, content ) => {
  return {
    type: ( status ) ? SHOW_MODAL : HIDE_MODAL,
    content,
  };
};

export const fetchContent = () => {
  return api.fetchContent().then( ( response ) => {
    return {
      type: FETCH_CONTENT,
      content: response,
    };
  } );
};
