/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const path = require('path');
const webpackConfig = require('./packages/terra-site/webpack.config.js');
const VisualRegressionCompare = require('wdio-visual-regression-service/compare');
const chai = require('chai');
const seleniumConfig = require('selenium-standalone/lib/default-config');
const fs = require('fs');


// TODO: Move into toolkit
function getScreenshotName(ref) {
  return (context) => {
    const testName = context.test.title;
    const browserName = context.desiredCapabilities.browserName;
    const browserWidth = context.meta.viewport.width;
    const testPath = path.dirname(context.test.file);
    return path.join(testPath, '__snapshots__', ref, `${testName}_${browserName}_${browserWidth}.png`);
  };
}


const drivers = seleniumConfig.drivers;
drivers.chrome.version = '2.33';
const seleniumVersion = '3.6.0';
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
        'disable-gpu',
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

  services: ['selenium-standalone', 'visual-regression', 'webpack-dev-server'],
  seleniumArgs: {
    version: seleniumVersion,
  },
  seleniumInstallArgs: {
    version: seleniumVersion,
    drivers,
  },

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

  before: () => {
    global.expect = chai.expect;
    chai.Should();

    // TODO: Move into toolkit
    chai.Assertion.addMethod('matchReference', function () {
      // eslint-disable-next-line no-underscore-dangle
      new chai.Assertion(this._obj).to.be.instanceof(Array);
      // eslint-disable-next-line no-underscore-dangle
      this.assert(this._obj.every(scr => scr.isExactSameImage),
        'expected screenshots to match reference',
        'expected screenshots to not match reference');
    });

    chai.Assertion.addMethod('accessible', function () {
      // eslint-disable-next-line no-underscore-dangle
      new chai.Assertion(this._obj).to.be.instanceof(Array);
      // eslint-disable-next-line no-underscore-dangle
      const errors = this._obj
        .reduce((all, test) => all.concat(test.result.violations), [])
        .filter(test => test)
        .map(test => `${test.description}. ${test.help}`);

      this.assert(errors.length === 0,
        `expected no accessibility violations but got:\n\t${errors.join('\n\t')}`,
        'expected accessibilty errors but received none');
    });

    // TODO: Move into toolkit
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

    // TODO: move into toolkit

    browser.addCommand('a11y', (options) => {
      if (browser.execute(function () { return window.axe === undefined; })) {
        const src = fs.readFileSync('node_modules/axe-core/axe.min.js', 'utf8');
        browser.execute(src.replace(/^\/\*.*\*\//, ''));
      }

      const viewports = options.viewports;
      const currentViewportSize = browser.getViewportSize();
      if (viewports.length === 0) {
        viewports.push(currentViewportSize);
      }
      const results = options.viewports.map((viewport) => {
        browser.setViewportSize(viewport);
        return browser.executeAsync(function (done) {
          axe.run(function (error, result) {
            done({
              error: error,
              result: result
            });
          });
        }).value;
      });

      // set viewport back
      browser.setViewportSize(currentViewportSize);
      return results;
    });
  },

  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getScreenshotName('reference'),
      screenshotName: getScreenshotName('screen'),
      diffName: getScreenshotName('diff'),
      misMatchTolerance: 0.01,
    }),
    viewportChangePause: 300,
    widths: [],
  },
  webpackConfig,
  webpackPort: 8080,
};
