const webpack = require( 'webpack' );
const path = require( 'path' );

module.exports = {
  devtool: 'eval',
  entry: {
    'index': [
      'babel-polyfill',
      './index.js',
    ],
  },
  output: {
    path: path.join( __dirname, 'dist' ),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin( {
      __API__: apiHost,
    } ),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join( __dirname ),
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.html'],
  },
};

// @link: http://developmentnow.com/2016/07/13/webpack-injecting-server-urls/
// @link: http://stackoverflow.com/questions/36102751/how-set-the-base-path-of-rest-api-with-webpack
let apiHost;

const setupAPI = function () {
  switch ( process.env.NODE_ENV ) {
    case 'production':
      apiHost = 'http://prod.com';
      break;
    case 'development':
    default:
      apiHost = 'http://dev.com';
      break;
  }
};

setupAPI();
