import React, { Component } from 'react';
import { render } from 'react-dom';
import { get } from 'axios';

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
      console.log( 'this is response:', response.data );
      this.setState( {
        content: response.data,
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


render(
  <App />,
  document.getElementById( 'app' ),
);
