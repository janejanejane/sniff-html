import React, { PropTypes } from 'react';

const Logout = ( { toggleModal } ) => {
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

Logout.propTypes = {
  toggleModal: PropTypes.func,
};

export default Logout;
