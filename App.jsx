import React, { Component } from 'react';
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
    get( '/content', {
      responseType: 'text',
    } )
    .then( ( response ) => {
      const html = response.data;
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

export default App;
