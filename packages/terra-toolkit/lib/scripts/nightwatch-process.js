#!/usr/bin/env node
'use strict';

var _nightwatch = require('nightwatch');

var _nightwatch2 = _interopRequireDefault(_nightwatch);

var _sauceLauncher = require('../sauce-launcher');

var _serverLauncher = require('../server-launcher');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isChildProcess = process.argv.find(function (arg) {
  return arg === '--parallel-mode';
});

if (isChildProcess) {
  _nightwatch2.default.cli(function (argv) {
    var updatedArgv = argv;
    /* eslint-disable no-underscore-dangle */
    updatedArgv._source = argv._.slice(0);
    /* eslint-enable no-underscore-dangle */
    _nightwatch2.default.runner(updatedArgv, function (success) {
      if (!success) {
        process.exit(1);
      }
    });
  });
} else {
  var exitCode = 0;
  Promise.all([(0, _serverLauncher.launchServer)(), (0, _sauceLauncher.launchSauceConnect)()]).then(function () {
    return new Promise(function (resolve, reject) {
      _nightwatch2.default.cli(function (argv) {
        var updatedArgv = argv;
        /* eslint-disable no-underscore-dangle */
        updatedArgv._source = argv._.slice(0);
        /* eslint-enable no-underscore-dangle */
        _nightwatch2.default.runner(updatedArgv, function (success) {
          if (!success) {
            reject(success);
          } else {
            resolve();
          }
        });
      });
    });
  }).catch(function (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    exitCode = 1;
  }).then(function () {
    return Promise.all([(0, _sauceLauncher.closeSauceConnect)(), (0, _serverLauncher.closeServer)()]);
  }).then(function () {
    process.exit(exitCode);
  }).catch(function (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1);
  });
}