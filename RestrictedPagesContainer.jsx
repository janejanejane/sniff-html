import React, { Component } from 'react';
import { connect } from 'react-redux';

class RestrictedPagesContainer extends Component {
  componentDidMount() {
    const { dispatch, currentUrl } = this.props;

    if ( !isLoggedIn ) {
      dispatch( setRedirectUrl( currentUrl ) );
      browserHistory.replace( '/login' );
    }
  }

  render() {
    if ( isLoggedIn ) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

function mapStateToProps( state, ownProps ) {
  return {
    isLoggedIn: state.loggedIn,
    currentUrl: ownProps.location.pathname,
  };
}

export default connect( mapStateToProps )( RestrictedPagesContainer );
