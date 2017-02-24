import React, { Component, PropTypes } from 'react';

import App from './App';
import Logout from './Logout';

class MainPage extends Component {
  constructor( props ) {
    super( props );
    this.handleClick = this.handleClick.bind( this );
  }

  handleClick() {
    this.props.toggleModal( true, <Logout toggleModal={this.props.toggleModal} /> );
  }

  render() {
    const {
      children,
      modalContent,
    } = this.props;

    return (
      <div>
        <App />
        <button
          onClick={() => { this.handleClick(); }}
        >Show logout button!</button>
        {modalContent}
        {children}
      </div>
    );
  }
}

MainPage.propTypes = {
  children: PropTypes.node,
  modalContent: PropTypes.node,
  toggleModal: PropTypes.func,
};

export default MainPage;
