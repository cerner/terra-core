/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const webpackConfig = require('./packages/terra-site/webpack.config.js');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const chai = require('chai');
const chromedriver = require('chromedriver');

function getScreenshotName(ref) {
  return (context) => {
    const testName = context.test.title;
    const browserName = context.desiredCapabilities.browserName;
    const browserWidth = context.meta.viewport.width;
    const testPath = path.dirname(context.test.file);
    return path.join(testPath, '__snapshots__', ref, `${testName}_${browserName}_${browserWidth}.png`);
  };
}

exports.config = {

  specs: [
    './packages/terra-badge/tests/browser/**/*-spec.js',
  ],

  maxInstances: 10,

  capabilities: [{
    browserName: 'chrome',
    javascriptEnabled: true,
    acceptSslCerts: true,
    chromeOptions: {
      args: [
        'headless',
        'no-sandbox',
        'disable-extensions',
      ],
    },
  }],

  sync: true,

  logLevel: 'dot',

  coloredLogs: true,

  bail: 0,

  screenshotPath: './errorShots/',

  baseUrl: 'http://localhost:8080',

  waitforTimeout: 60000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  services: ['visual-regression', 'webpack-dev-server', 'selenium-standalone'],

  framework: 'mocha',

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    compilers: [
      'js:babel-register',
    ],
  },
  plugins: {
    'wdio-screenshot': {},
  },

  beforeSession: () => {
    chromedriver.start();
  },

  before: () => {
    global.expect = chai.expect;
    chai.Should();

    global.viewport = (...sizes) => {
      const widths = {
        tiny: { width: 470, height: 768 },
        small: { width: 622, height: 768 },
        medium: { width: 838, height: 768 },
        large: { width: 1000, height: 768 },
        huge: { width: 1300, height: 768 },
        enormous: { width: 500, hegiht: 768 },
      };

      if (sizes.length === 0) {
        return global.viewport('tiny', 'small', 'medium', 'large', 'huge');
      }

      return sizes.map(size => widths[size]);
    };
  },

  afterSession: () => {
    chromedriver.stop();
  },

  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getScreenshotName('reference'),
      screenshotName: getScreenshotName('screen'),
      diffName: getScreenshotName('diff'),
      misMatchTolerance: 0,
    }),
    viewportChangePause: 300,
    widths: [],
  },
  webpackConfig,
  webpackPort: 8080,
};
