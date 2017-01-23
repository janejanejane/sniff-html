import React, { Component } from 'react';
import { render } from 'react-dom';
import { get } from 'axios';
import $ from 'jquery';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      content: null,
    };
  }

  componentWillMount() {
    get( 'https://www.nzpost.co.nz/about-us/who-we-are/terms-of-business/standard-terms-products-services/public-contract', {
      responseType: 'text',
    } )
    .then( ( response ) => {
      const html = response.data;
      console.log( 'this is response:', html );

      const content = $( html ).find( 'div.content' ).html();

      this.setState( {
        content,
      } );
    } );
  }

  render() {
    return (
      <div>
        <h1>TESTING!</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
    );
  }
}


const Logout = () => {
  return (
    <div>
      <form
        action="/logout"
        method="POST"
        name="ns-logout-form"
        onSubmit={( e ) => {
          console.log( 'logout clicked!' );
        }}
      >
        <input
          type="submit"
          value="logout!"
        />
      </form>
    </div>
  );
};

class Main extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      showLogout: false,
    };
  }

  render() {
    const node = ( this.state.showLogout ) ? <Logout /> : null;

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


render(
  <div>
    <Main />
  </div>,
  document.getElementById( 'app' ),
);
