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
      <form name="logout" action="/logout">
        <button >logout!</button>
      </form>
    </div>
  );
};

render(
  <div>
    <App />
    <Logout />
  </div>,
  document.getElementById( 'app' ),
);
