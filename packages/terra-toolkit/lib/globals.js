'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _sauceConnectLauncher = require('sauce-connect-launcher');

var _sauceConnectLauncher2 = _interopRequireDefault(_sauceConnectLauncher);

var _updateSauce = require('./update-sauce');

var _updateSauce2 = _interopRequireDefault(_updateSauce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  before: function before(done) {
    if (process.env.REMOTE === 'true') {
      (0, _sauceConnectLauncher2.default)({
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        port: 4446
      }, function (_, sauceConnectProcess) {
        module.sauceConnectProcess = sauceConnectProcess;
        done();
      });
    } else {
      done();
    }
  },
  after: function after(done) {
    if (module.sauceConnectProcess) {
      module.sauceConnectProcess.close(done);
    } else {
      done();
    }
  },
  beforeEach: function beforeEach(browser, done) {
    /* eslint-disable global-require, import/no-dynamic-require */
    var config = require(browser.globals.testConfigPath);
    /* eslint-enable global-require, import/no-dynamic-require */
    var globals = browser.globals;
    globals.server = new _webpackDevServer2.default((0, _webpack2.default)(config), {
      quiet: true
    });

    globals.server.listen(browser.globals.webpackDevServerPort, '0.0.0.0');
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },
  afterEach: function afterEach(browser, done) {
    browser.globals.server.close();
    browser.end(done);

    if (process.env.REMOTE === 'true') {
      (0, _updateSauce2.default)(browser, done);
    } else {
      done();
    }
  }
};