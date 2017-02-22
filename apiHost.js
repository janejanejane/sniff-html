
// @link: http://developmentnow.com/2016/07/13/webpack-injecting-server-urls/
// @link: http://stackoverflow.com/questions/36102751/how-set-the-base-path-of-rest-api-with-webpack

module.exports = {
  setupAPI() {
    switch ( process.env.NODE_ENV ) {
      case 'production':
        return '"http://prod.com"';
      case 'development':
      default:
        return '"http://dev.com"';
    }
  },
};
