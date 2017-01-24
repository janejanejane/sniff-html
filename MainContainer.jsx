import { connect } from 'react-redux';

import MainPage from './MainPage';
import { toggleModal } from './action';

const mapStateToProps = ( dispatch ) => {
  return {
    toggleModal: () => {
      dispatch( toggleModal() );
    },
  };
};

const mapDispatchToProps = ( state ) => {
  return {
    modalExpand: state.modal.open,
    modalContent: state.modal.content,
  };
};

export default connect( mapStateToProps, mapDispatchToProps )( MainPage );
