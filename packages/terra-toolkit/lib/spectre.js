'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createSpectreRun = function (browser, callback) {
  var data = JSON.stringify({
    project: 'terra-ui',
    suite: browser.currentTest.module + '-' + browser.options.desiredCapabilities.browserName + '-' + browser.globals.windowSizeKey
  });

  function responseCallback(res) {
    res.setEncoding('utf8');
    res.on('data', function (responseData) {
      var updatedBrowserGlobals = browser.globals;
      updatedBrowserGlobals.spectreRunId = JSON.parse(responseData).id;
    });
    res.on('end', callback);
  }

  try {
    var req = _http2.default.request({
      hostname: 'localhost',
      port: 3000,
      path: '/runs',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }, responseCallback);

    req.write(data);
    req.end();
  } catch (error) {
    callback();
  }
};

exports.createSpectreTest = function (browser, imagePath, callback) {
  function responseCallback(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('upload failed:', err);
    }
    callback();
  }

  var formData = {};
  formData['test[run_id]'] = browser.globals.spectreRunId;
  formData['test[name]'] = browser.currentTest.name;
  formData['test[platform]'] = browser.options.desiredCapabilities.platform ? browser.options.desiredCapabilities.platform : 'default';
  formData['test[browser]'] = browser.options.desiredCapabilities.browserName;
  formData['test[size]'] = browser.globals.width;
  formData['test[screenshot]'] = _fs2.default.createReadStream(imagePath);

  _request2.default.post({
    url: 'http://localhost:3000/tests',
    formData: formData
  }, responseCallback);
};