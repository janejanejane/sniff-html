import { Component } from 'react';
import { connect, setRedirectUrl } from 'react-redux';

class RestrictedPagesContainer extends Component {
  componentDidMount() {
    const { dispatch, currentUrl, isLoggedIn } = this.props;

    if ( !isLoggedIn ) {
      dispatch( setRedirectUrl( currentUrl ) );
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

export default connect( mapStateToProps )( RestrictedPagesContainer );
