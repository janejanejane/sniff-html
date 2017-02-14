const fakeDatabase = {
  content: 'test',
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
