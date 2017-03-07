'use strict';

var _sauceConnectLauncher = require('sauce-connect-launcher');

var _sauceConnectLauncher2 = _interopRequireDefault(_sauceConnectLauncher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.launchSauceConnect = function () {
  return new Promise(function (resolve, reject) {
    if (process.env.REMOTE === 'true') {
      (0, _sauceConnectLauncher2.default)({
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        port: 4446
      }, function (error, sauceConnectProcess) {
        if (!error) {
          module.sauceConnectProcess = sauceConnectProcess;
          resolve();
        } else {
          reject(Error(error));
        }
      });
    } else {
      resolve();
    }
  });
};

exports.closeSauceConnect = function () {
  return new Promise(function (resolve) {
    if (module.sauceConnectProcess) {
      module.sauceConnectProcess.close(resolve);
    } else {
      resolve();
    }
  });
};