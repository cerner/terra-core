'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (config) {
  jasmine.getEnv().clearReporters();
  jasmine.getEnv().addReporter(new _jasmineSpecReporter2.default.SpecReporter());
  jasmine.getEnv().addReporter({
    jasmineStarted: function jasmineStarted() {
      if (process.env.SKIP_SCREENSHOTS !== 'true') {
        jasmine.terraToolkitTestResults = new _testResults2.default();
      }
    },

    jasmineDone: function jasmineDone() {
      if (jasmine.terraToolkitTestResults !== undefined) {
        jasmine.terraToolkitTestResults.save();
      }
    },

    specStarted: function specStarted(result) {
      if (jasmine.terraToolkitTestResults !== undefined) {
        jasmine.terraToolkitTestResults.start(result);
      }
    },

    specDone: function specDone() {
      if (jasmine.terraToolkitTestResults !== undefined) {
        jasmine.terraToolkitTestResults.finish();
      }
    }
  });

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;

  var server = void 0;
  beforeAll(function () {
    server = new _webpackDevServer2.default((0, _webpack2.default)(config), {
      quiet: true
    });
    server.listen(18080, '0.0.0.0');
  });

  afterAll(function () {
    server.close();
  });
};

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _jasmineSpecReporter = require('jasmine-spec-reporter');

var _jasmineSpecReporter2 = _interopRequireDefault(_jasmineSpecReporter);

var _testResults = require('./test-results');

var _testResults2 = _interopRequireDefault(_testResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }