'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

module.exports = {
  beforeEach: function beforeEach(browser, done) {
    /* eslint-disable global-require, import/no-dynamic-require */
    var config = require(browser.globals.testConfigPath);
    /* eslint-enable global-require, import/no-dynamic-require */
    undefined.server = new _webpackDevServer2.default((0, _webpack2.default)(config), {
      quiet: true
    });

    undefined.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: function afterEach(browser, done) {
    undefined.server.close();
    browser.end(done);
  }
};