#!/usr/bin/env node
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _loadJsonFile = require('load-json-file');

var _loadJsonFile2 = _interopRequireDefault(_loadJsonFile);

var _glob = require('glob');

var _nightwatch = require('nightwatch');

var _nightwatch2 = _interopRequireDefault(_nightwatch);

var _sauceLauncher = require('../sauce-launcher');

var _serverLauncher = require('../server-launcher');

var _spectre = require('../spectre');

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
  var testSuitePromises = [];
  var spectreRunMap = {};

  if (process.env.SAVE_TO_SPECTRE === 'true') {
    if (process.env.SPECTRE_TEST_SUITE) {
      testSuitePromises.push((0, _spectre.createSpectreRun)(spectreRunMap, process.env.SPECTRE_TEST_SUITE));
    } else {
      _loadJsonFile2.default.sync(_path2.default.resolve('lerna.json')).packages.forEach(function (globPath) {
        (0, _glob.sync)(globPath).forEach(function (packagePath) {
          var nightWatchPath = packagePath + '/tests/nightwatch';
          if (_fs2.default.existsSync(nightWatchPath) && nightWatchPath !== 'packages/terra-toolkit/tests/nightwatch') {
            testSuitePromises.push((0, _spectre.createSpectreRun)(spectreRunMap, _path2.default.basename(packagePath)));
          }
        });
      });
    }
  }

  var exitCode = 0;
  Promise.all([(0, _serverLauncher.launchServer)(), (0, _sauceLauncher.launchSauceConnect)(), testSuitePromises.reduce(function (current, next) {
    return current.then(next);
  }, Promise.resolve())]).catch(function (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    process.exit(1);
  }).then(function (promiseResolution) {
    return new Promise(function (resolve, reject) {
      if (process.env.SAVE_TO_SPECTRE === 'true') {
        process.env.spectreRunMap = JSON.stringify(promiseResolution[2]);
      }
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