'use strict';

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.createSpectreRun = function (spectreRunMap, suiteName) {
  return function () {
    return new Promise(function (resolve, reject) {
      var returnedSpectreRunMap = spectreRunMap;

      function responseCallback(res) {
        res.setEncoding('utf8');
        res.on('data', function (responseData) {
          returnedSpectreRunMap[suiteName] = JSON.parse(responseData).id;
        });
        res.on('end', function () {
          resolve(returnedSpectreRunMap);
        });
      }

      if (process.env.SAVE_TO_SPECTRE === 'true') {
        var data = JSON.stringify({
          project: 'terra-ui',
          suite: suiteName
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
        resolve();
      }
    });
  };
};

exports.createSpectreTest = function (browser, imagePath, suiteName, callback) {
  function responseCallback(err) {
    if (err) {
      // eslint-disable-next-line no-console
      console.error('upload failed:', err);
    }
    callback();
  }

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    var version = browser.options.desiredCapabilities.version ? browser.options.desiredCapabilities.version : 'latest';
    var browserName = browser.options.desiredCapabilities.browserName + '-' + version;

    var formData = {};
    formData['test[run_id]'] = JSON.parse(process.env.spectreRunMap)[suiteName];
    formData['test[name]'] = '' + browser.currentTest.name;
    formData['test[platform]'] = browser.options.desiredCapabilities.platform ? browser.options.desiredCapabilities.platform : 'default';
    formData['test[browser]'] = browserName;
    formData['test[size]'] = browser.globals.windowSizeKey;
    formData['test[screenshot]'] = _fs2.default.createReadStream(imagePath);

    _request2.default.post({
      url: 'http://monstrous-screen-grabber.herokuapp.com/tests',
      formData: formData
    }, responseCallback);
  } else {
    callback();
  }
};