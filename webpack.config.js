const webpack = require( 'webpack' );
const path = require( 'path' );
const apiHost = require( './apiHost' );

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
      __API__: apiHost.setupAPI(),
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
