import React, { Component } from 'react';

import Logout from './Logout';
import { toggleModal } from './action';

class MainPage extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      showLogout: false,
    };
  }

  render() {
    const node = ( this.state.showLogout )
      ? toggleModal( true, <Logout /> )
      : toggleModal( false, null );

    return (
      <div>
        <button
          onClick={() => {
            this.setState( {
              showLogout: !this.state.showLogout,
            } );
          }}
        >Show logout button!</button>
        {node}
      </div>
    );
  }
}


export default MainPage;
