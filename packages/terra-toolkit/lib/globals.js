'use strict';

var _this = this; /* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  beforeEach: (browser, done) => {
    /* eslint-disable global-require, import/no-dynamic-require */
    const config = require(browser.globals.testConfigPath);
    /* eslint-enable global-require, import/no-dynamic-require */
    _this.server = new _webpackDevServer2.default((0, _webpack2.default)(config), {
      quiet: true
    });

    _this.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: (browser, done) => {
    _this.server.close();
    browser.end(done);
  }
};