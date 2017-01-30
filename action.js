export const HIDE_MODAL = 'HIDE_MODAL';
export const SHOW_MODAL = 'SHOW_MODAL';

export const toggleModal = ( status, content ) => {
  return {
    type: ( status ) ? SHOW_MODAL : HIDE_MODAL,
    content,
  };
};
