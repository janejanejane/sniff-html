import React, { Component, PropTypes } from 'react';

import Logout from './Logout';

class MainPage extends Component {
  constructor( props ) {
    super( props );
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick() {
    console.log( 'here!' );

    this.props.toggleModal( true, <Logout /> );
  }

  render() {
    console.log( 'props:', this.props );
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
  toggleModal: PropTypes.func,
};

export default MainPage;
