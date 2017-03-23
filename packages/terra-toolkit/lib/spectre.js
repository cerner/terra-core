'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createSpectreRun = function () {
  return new Promise(function (resolve, reject) {
    function responseCallback(res) {
      var spectreRunId = 0;
      res.setEncoding('utf8');
      res.on('data', function (responseData) {
        spectreRunId = JSON.parse(responseData).id;
      });
      res.on('end', function () {
        resolve(spectreRunId);
      });
    }

    if (process.env.SAVE_TO_SPECTRE === 'true') {
      var data = JSON.stringify({
        project: 'terra-ui',
        suite: 'Full Suite'
      });

      try {
        var req = _http2.default.request({
          hostname: 'monstrous-screen-grabber.herokuapp.com',
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
        reject(Error(error));
      }
    } else {
      resolve(0);
    }
  });
};

exports.createSpectreTest = function (browser, imagePath, callback) {
  function responseCallback(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('upload failed:', err);
    }
    callback();
  }

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    var formData = {};
    formData['test[run_id]'] = process.env.spectreRunId;
    formData['test[name]'] = browser.currentTest.module + ' - ' + browser.currentTest.name;
    formData['test[platform]'] = browser.options.desiredCapabilities.platform ? browser.options.desiredCapabilities.platform : 'default';
    formData['test[browser]'] = browser.options.desiredCapabilities.browserName;
    formData['test[size]'] = browser.globals.width;
    formData['test[screenshot]'] = _fs2.default.createReadStream(imagePath);

    _request2.default.post({
      url: 'http://monstrous-screen-grabber.herokuapp.com/tests',
      formData: formData
    }, responseCallback);
  } else {
    callback();
  }
};