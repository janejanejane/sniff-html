import { connect } from 'react-redux';

import MainPage from './MainPage';
import { toggleModal } from './action';

const mapDispatchToProps = ( dispatch ) => {
  return {
    toggleModal: ( status, content ) => {
      dispatch( toggleModal( status, content ) );
    },
  };
};

const mapStateToProps = ( state ) => {
  console.log( 'state?', state );
  return {
    modalExpand: state.modal.open,
    modalContent: state.modal.content,
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( MainPage );
