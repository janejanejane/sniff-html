import { connect } from 'react-redux';

import MainPage from './MainPage';
import * as actions from './action';

const mapStateToProps = ( state ) => {
  return {
    modalExpand: state.modal.open,
    modalContent: state.modal.content,
  };
};

export default connect(
  mapStateToProps,
  actions,
)( MainPage );
