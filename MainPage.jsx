import React, { Component, PropTypes } from 'react';

import Logout from './Logout';
import { toggleModal } from './action';

class MainPage extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      showLogout: false,
    };
  }

  handleClick() {
    console.log( 'here!' );
    this.setState( {
      showLogout: true,
    } );

    if ( this.state.showLogout ) {
      toggleModal( true, <Logout /> );
    } else {
      toggleModal( false, null );
    }
  }

  render() {
    return (
      <div>
        <button
          onClick={() => { this.handleClick(); }}
        >Show logout button!</button>
        {this.props.modalContent}
      </div>
    );
  }
}

MainPage.propTypes = {
  modalContent: PropTypes.node,
};

export default MainPage;
