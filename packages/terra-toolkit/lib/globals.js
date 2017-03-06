'use strict';

var _updateSauce = require('./update-sauce');

var _updateSauce2 = _interopRequireDefault(_updateSauce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { launchSauceConnect, closeSauceConnect } from './sauce-launcher';

module.exports = {
  // before: (done) => {
  //   if (process.env.REMOTE === 'true') {
  //     launchSauceConnect(done);
  //   } else {
  //     done();
  //   }
  // },
  // after: (done) => {
  //   closeSauceConnect(done);
  // },
  beforeEach: function beforeEach(browser, done) {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: function afterEach(browser, done) {
    browser.end(function () {
      if (process.env.REMOTE === 'true') {
        (0, _updateSauce2.default)(browser, done);
      } else {
        done();
      }
    });
  }
}; // import webpack from 'webpack';
// import WebpackDevServer from 'webpack-dev-server';