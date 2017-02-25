'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  beforeEach: function beforeEach(browser, done) {
    /* eslint-disable global-require, import/no-dynamic-require */
    var config = require(browser.globals.testConfigPath);
    /* eslint-enable global-require, import/no-dynamic-require */
    var globals = browser.globals;
    globals.server = new _webpackDevServer2.default((0, _webpack2.default)(config), {
      quiet: false
    });

    globals.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: function afterEach(browser, done) {
    browser.globals.server.close();
    browser.end(done);
  }
};