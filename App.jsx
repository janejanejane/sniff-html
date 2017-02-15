import React, { Component } from 'react';
import { fetchContent } from './action';

class App extends Component {

  constructor( props ) {
    super( props );
    this.state = {
      content: null,
    };
  }

  componentWillMount() {
    fetchContent()
    .then( ( response ) => {
      const html = response;

      this.setState( {
        html,
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
