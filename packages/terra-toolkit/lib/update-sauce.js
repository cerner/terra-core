'use strict';

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (browser, callback) {
  var currentTest = browser.currentTest;
  var username = browser.options.username;
  var sessionId = browser.capabilities['webdriver.remote.sessionid'];
  var accessKey = browser.options.accessKey;
  var passed = currentTest.results.passed === currentTest.results.tests;

  var data = JSON.stringify({
    passed: passed
  });

  var requestPath = '/rest/v1/' + username + '/jobs/' + sessionId;

  function responseCallback(res) {
    res.setEncoding('utf8');
    res.on('data', function () {});
    res.on('end', callback);
  }

  try {
    var req = _https2.default.request({
      hostname: 'saucelabs.com',
      path: requestPath,
      method: 'PUT',
      auth: username + ':' + accessKey,
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }, responseCallback);

    req.write(data);
    req.end();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    callback();
  }
};