'use strict';

var _sauceConnectLauncher = require('sauce-connect-launcher');

var _sauceConnectLauncher2 = _interopRequireDefault(_sauceConnectLauncher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.launchSauceConnect = function (done) {
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
};

exports.closeSauceConnect = function (done) {
  if (process.env.REMOTE === 'true') {
    module.sauceConnectProcess.close(done);
  } else {
    done();
  }
};