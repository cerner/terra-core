/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const getPackageTestDirectories = require('terra-toolkit/lib/nightwatch/setup-helper.js').getPackageTestDirectories;
const ip = require('ip');
const SeleniumDockerService = require('terra-toolkit/lib/wdio/services/SeleniumDockerService').default;
const ServeStaticService = require('terra-toolkit/lib/wdio/services/ServeStaticService').default;
const webpackConfig = require('./webpack.config');

let srcFolders;
const isRepoTest = !process.cwd().includes('/packages/');

if (isRepoTest) {
  srcFolders = getPackageTestDirectories('lerna.json');
} else {
  srcFolders = 'tests/nightwatch/';
}

let port = 8080;

const seleniumPort = 4444;
const seleniumHost = ip.address();

// eslint-disable-next-line no-console
console.warn('WARNING: WebdriverIO should be used instead of Nightwatch.  Nightwatch will be deprecated in the future.');

const seleniumDocker = new SeleniumDockerService();
const expressDevService = new ServeStaticService();

const startDriverAndServer = (done) => {
  const webPackPromise = expressDevService.onPrepare({
    webpackConfig,
    serveStatic: { port },
  });

  const dockerPromise = seleniumDocker.onPrepare({
    host: process.env.TRAVIS ? 'standalone-chrome' : seleniumHost,
    port: seleniumPort,
    path: '/wd/hub',
    seleniumDocker: {
      enabled: !process.env.TRAVIS && !process.env.CI,
    },
  }, [{ browserName: 'chrome' }]);

  Promise.all([webPackPromise, dockerPromise]).then(done);
};

const stopDriverAndServer = (done) => {
  Promise.all([
    expressDevService.onComplete(),
    seleniumDocker.onComplete(),
  ]).then(done);
};

const endBrowserSession = (browser, done) => browser.end(done);

const config = {
  selenium: {
    start_process: false,
  },
  src_folders: srcFolders,
  output_folder: 'reports',
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: '',
  persist_globals: true,
  test_workers: false,
  detailed_output: !process.env.TRAVIS && !process.env.CI,
  test_settings: {
    default: {
      launch_url: `http://${process.env.TRAVIS ? 'standalone-chrome' : seleniumHost}:${port}`,
      persist_globals: true,
      selenium_port: seleniumPort,
      selenium_host: process.env.TRAVIS ? 'standalone-chrome' : seleniumHost,
      silent: true,
      globals: {
        breakpoints: {
          tiny: [470, 768],
          small: [622, 768],
          medium: [838, 768],
          large: [1000, 768],
          huge: [1300, 768],
          enormous: [1500, 768],
        },
        asyncHookTimeout: 30000,
        waitForConditionTimeout: 1000,
        retryAssertionTimeout: 1000,
        before: startDriverAndServer,
        after: stopDriverAndServer,
        afterEach: endBrowserSession,
      },
      filter: '**/*-spec.js',
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: true,
        path: './screenshots',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
};

module.exports = config;
