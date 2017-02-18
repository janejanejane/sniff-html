const fakeDatabase = {
  content: 'test',
  auth: {
    username: 'jean',
    password: 'pass',
  },
};

const delay = ( ms ) => {
  return new Promise( ( resolve ) => {
    return setTimeout( resolve, ms );
  } );
};

export const fetchContent = () => {
  return delay( 500 ).then( () => {
    return fakeDatabase.content;
  } );
};

export const login = ( username, password ) => {
  return delay( 500 ).then( () => {
    return ( fakeDatabase.auth.username === username && fakeDatabase.auth.password === password );
  } );
};
