'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var windowSizes = {
  tiny: [470, 768],
  small: [622, 768],
  medium: [838, 768],
  large: [1000, 768],
  huge: [1300, 768],
  enormous: [1500, 768]
};

var drivers = {
  default: {
    launch_url: 'http://localhost',
    selenium_port: 4444,
    selenium_host: 'localhost',
    silent: true,
    screenshots: {
      enabled: true,
      path: 'screenshots'
    },
    desiredCapabilities: {
      browserName: 'phantomjs',
      javascriptEnabled: true,
      acceptSslCerts: true,
      'phantomjs.binary.path': '../../node_modules/phantomjs-prebuilt/bin/phantomjs',
      'phantomjs.cli.args': []
    }
  },
  firefox: {
    desiredCapabilities: {
      browserName: 'firefox',
      marionette: true,
      javascriptEnabled: true,
      acceptSslCerts: true
    }
  },
  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
      javascriptEnabled: true,
      acceptSslCerts: true
    }
  },
  safari: {
    desiredCapabilities: {
      browserName: 'safari',
      javascriptEnabled: true,
      acceptSslCerts: true
    }
  }
};

module.exports = function (testConfigPath, settings) {
  var testingConfiguration = {};

  var currentPort = 19000;
  Object.keys(drivers).forEach(function (driverKey) {
    Object.keys(windowSizes).forEach(function (windowSizeKey) {
      var key = driverKey + '-' + windowSizeKey;
      testingConfiguration[key] = _extends({}, drivers[driverKey]);
      testingConfiguration[key].globals = {};
      testingConfiguration[key].globals.width = windowSizes[windowSizeKey][0];
      testingConfiguration[key].globals.height = windowSizes[windowSizeKey][1];
      testingConfiguration[key].globals.testConfigPath = testConfigPath;
      testingConfiguration[key].globals.webpackDevServerPort = currentPort;
      currentPort += 1;
    });
  });
  var returnSettings = settings;
  returnSettings.test_settings = testingConfiguration;
  return returnSettings;
};