#!/usr/bin/env node
'use strict';

var _nightwatch = require('nightwatch');

var _nightwatch2 = _interopRequireDefault(_nightwatch);

var _sauceLauncher = require('./sauce-launcher');

var _serverLauncher = require('./server-launcher');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isChildProcess = process.argv.find(function (arg) {
  return arg === '--parallel-mode';
});

if (isChildProcess) {
  _nightwatch2.default.cli(function (argv) {
    argv._source = argv._.slice(0); // eslint-disable-line
    _nightwatch2.default.runner(argv);
  });
} else {
  (0, _serverLauncher.launchServer)(function () {
    (0, _sauceLauncher.launchSauceConnect)(function () {
      _nightwatch2.default.cli(function (argv) {
        argv._source = argv._.slice(0); // eslint-disable-line
        _nightwatch2.default.runner(argv, function () {
          (0, _sauceLauncher.closeSauceConnect)(function () {
            (0, _serverLauncher.closeServer)(function () {
              process.exit(0);
            });
          });
        });
      });
    });
  });
}