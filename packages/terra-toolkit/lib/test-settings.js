'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _seleniumServerStandaloneJar = require('selenium-server-standalone-jar');

var _seleniumServerStandaloneJar2 = _interopRequireDefault(_seleniumServerStandaloneJar);

var _phantomjsPrebuilt = require('phantomjs-prebuilt');

var _phantomjsPrebuilt2 = _interopRequireDefault(_phantomjsPrebuilt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      enabled: false
    },
    desiredCapabilities: {
      browserName: 'phantomjs',
      javascriptEnabled: true,
      acceptSslCerts: true
    }
  },
  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
      platform: 'Windows 10',
      version: 'latest'
    }
  },
  ie10: {
    desiredCapabilities: {
      browserName: 'internet explorer',
      platform: 'Windows 8',
      version: '10.0'
    }
  },
  ie11: {
    desiredCapabilities: {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: 'latest'
    }
  },
  edge: {
    desiredCapabilities: {
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      version: 'latest'
    }
  },
  firefox: {
    desiredCapabilities: {
      browserName: 'firefox',
      platform: 'Windows 10',
      version: 'latest'
    }
  },
  safari: {
    desiredCapabilities: {
      browserName: 'safari',
      platform: 'macOS 10.12',
      version: 'latest'
    }
  }
};

module.exports = function (testConfigPath, settings) {
  var remote = process.env.REMOTE === 'true';

  var returnSettings = settings;
  var testingConfiguration = {};

  testingConfiguration.default = _extends({}, drivers.default);
  testingConfiguration.default.desiredCapabilities['phantomjs.binary.path'] = _phantomjsPrebuilt2.default.path;

  if (remote) {
    returnSettings.selenium.start_process = false;
    testingConfiguration.default.selenium_port = 80;
    testingConfiguration.default.selenium_host = 'ondemand.saucelabs.com';
    testingConfiguration.default.username = process.env.SAUCE_USERNAME;
    testingConfiguration.default.access_key = process.env.SAUCE_ACCESS_KEY;
  } else {
    returnSettings.selenium.start_process = true;
    returnSettings.selenium.server_path = _seleniumServerStandaloneJar2.default.path;
  }

  Object.keys(drivers).forEach(function (driverKey) {
    Object.keys(windowSizes).forEach(function (windowSizeKey) {
      var key = driverKey + '-' + windowSizeKey;
      testingConfiguration[key] = _extends({}, drivers[driverKey]);
      testingConfiguration[key].globals = {};
      // TODO: Tweak this value.  Not sure what's ideal.  It's necessary to transfer screen grabs though.
      testingConfiguration[key].globals.asyncHookTimeout = 30000;
      testingConfiguration[key].globals.width = windowSizes[windowSizeKey][0];
      testingConfiguration[key].globals.height = windowSizes[windowSizeKey][1];
      testingConfiguration[key].globals.windowSizeKey = windowSizeKey;
      testingConfiguration[key].globals.testConfigPath = testConfigPath;
      testingConfiguration[key].globals.webpackDevServerPort = 8080;

      if (!remote) {
        testingConfiguration[key].desiredCapabilities.version = undefined;
        testingConfiguration[key].desiredCapabilities.platform = undefined;
      }
    });
  });
  returnSettings.test_settings = testingConfiguration;
  return returnSettings;
};