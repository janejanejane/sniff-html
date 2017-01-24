import React from 'react';

import { toggleModal } from './action';

const Logout = () => {
  return (
    <div>
      <form
        action="/logout"
        method="POST"
        name="ns-logout-form"
        onSubmit={( e ) => {
          console.log( 'logout clicked!' );
          document.forms[e.target.name].submit();
        }}
      >
        <input
          type="submit"
          value="logout!"
        />
      </form>
      <div
        onClick={() => {
          toggleModal( false, null );
        }}
      >close</div>
    </div>
  );
};

export default Logout;
