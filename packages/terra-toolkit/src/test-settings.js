const windowSizes = {
  tiny: [470, 768],
  small: [622, 768],
  medium: [838, 768],
  large: [1000, 768],
  huge: [1300, 768],
  enormous: [1500, 768],
};

const drivers = {
  default: {
    launch_url: 'http://localhost',
    selenium_port: 4444,
    selenium_host: 'localhost',
    silent: true,
    screenshots: {
      enabled: false,
    },
    desiredCapabilities: {
      browserName: 'phantomjs',
      javascriptEnabled: true,
      acceptSslCerts: true,
      'phantomjs.binary.path': '../../node_modules/phantomjs-prebuilt/bin/phantomjs',
      'phantomjs.cli.args': [],
    },
  },
  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
      platform: 'Windows 10',
      version: 'latest',
    },
  },
  ie10: {
    desiredCapabilities: {
      browserName: 'internet explorer',
      platform: 'Windows 8',
      version: '10.0',
    },
  },
  ie11: {
    desiredCapabilities: {
      browserName: 'internet explorer',
      platform: 'Windows 10',
      version: 'latest',
    },
  },
  edge: {
    desiredCapabilities: {
      browserName: 'microsoftedge',
      platform: 'Windows 10',
      version: 'latest',
    },
  },
  firefox: {
    desiredCapabilities: {
      browserName: 'firefox',
      platform: 'Windows 10',
      version: 'latest',
    },
  },
  safari: {
    desiredCapabilities: {
      browserName: 'safari',
      platform: 'macOS 10.12',
      version: 'latest',
    },
  },
};

module.exports = (testConfigPath, settings) => {
  const remote = process.env.REMOTE === 'true';

  const returnSettings = settings;
  const testingConfiguration = {};

  testingConfiguration.default = Object.assign({}, drivers.default);

  if (remote) {
    returnSettings.selenium.start_process = false;
    testingConfiguration.default.selenium_port = 80;
    testingConfiguration.default.selenium_host = 'ondemand.saucelabs.com';
    testingConfiguration.default.username = process.env.SAUCE_USERNAME;
    testingConfiguration.default.access_key = process.env.SAUCE_ACCESS_KEY;
  }

  // let currentPort = 19000;
  Object.keys(drivers).forEach((driverKey) => {
    Object.keys(windowSizes).forEach((windowSizeKey) => {
      const key = `${driverKey}-${windowSizeKey}`;
      testingConfiguration[key] = Object.assign({}, drivers[driverKey]);
      testingConfiguration[key].globals = {};
      testingConfiguration[key].globals.width = windowSizes[windowSizeKey][0];
      testingConfiguration[key].globals.height = windowSizes[windowSizeKey][1];
      testingConfiguration[key].globals.testConfigPath = testConfigPath;
      testingConfiguration[key].globals.webpackDevServerPort = 8080;
      // currentPort += 1;
    });
  });
  returnSettings.test_settings = testingConfiguration;
  return returnSettings;
};
