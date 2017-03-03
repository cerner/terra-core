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
      enabled: true,
      path: 'screenshots',
    },
    desiredCapabilities: {
      browserName: 'phantomjs',
      javascriptEnabled: true,
      acceptSslCerts: true,
      'phantomjs.binary.path': '../../node_modules/phantomjs-prebuilt/bin/phantomjs',
      'phantomjs.cli.args': [],
    },
  },
  firefox: {
    desiredCapabilities: {
      browserName: 'firefox',
      marionette: true,
      javascriptEnabled: true,
      acceptSslCerts: true,
    },
  },
  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
      javascriptEnabled: true,
      acceptSslCerts: true,
    },
  },
  safari: {
    desiredCapabilities: {
      browserName: 'safari',
      javascriptEnabled: true,
      acceptSslCerts: true,
    },
  },
};

module.exports = (testConfigPath, settings) => {
  const testingConfiguration = {};

  let currentPort = 19000;
  Object.keys(drivers).forEach((driverKey) => {
    Object.keys(windowSizes).forEach((windowSizeKey) => {
      const key = `${driverKey}-${windowSizeKey}`;
      testingConfiguration[key] = Object.assign({}, drivers[driverKey]);
      testingConfiguration[key].globals = {};
      testingConfiguration[key].globals.width = windowSizes[windowSizeKey][0];
      testingConfiguration[key].globals.height = windowSizes[windowSizeKey][1];
      testingConfiguration[key].globals.testConfigPath = testConfigPath;
      testingConfiguration[key].globals.webpackDevServerPort = currentPort;
      currentPort += 1;
    });
  });
  const returnSettings = settings;
  returnSettings.test_settings = testingConfiguration;
  return returnSettings;
};
