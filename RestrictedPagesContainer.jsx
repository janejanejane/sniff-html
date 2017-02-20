import { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import * as action from './action/auth';

class RestrictedPagesContainer extends Component {
  componentDidMount() {
    const { currentUrl, isLoggedIn, setRedirectUrl } = this.props;

    console.log( this.props );

    if ( !isLoggedIn ) {
      setRedirectUrl( currentUrl );
      browserHistory.replace( '/login' );
    }
  }

  render() {
    if ( this.props.isLoggedIn ) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

function mapStateToProps( state, ownProps ) {
  console.log( state );
  return {
    isLoggedIn: state.loggedIn,
    currentUrl: ownProps.location.pathname,
  };
}

export default connect( mapStateToProps, action )( RestrictedPagesContainer );
