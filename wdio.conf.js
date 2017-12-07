/* global browser */
/* eslint-disable import/no-extraneous-dependencies */
const wdioConf = require('terra-toolkit/lib/wdio/conf');
const WebpackDevService = require('terra-toolkit/lib/wdio/services/index').WebpackDevService;
const localIP = require('ip');
const path = require('path');
const webpackConfig = require('./packages/terra-site/webpack.config.js');

const webpackPort = 8080;

// Flex specs search between local pacakge and repo
let specs = path.join('tests', 'wdio', '**', '*-spec.js');
if (__dirname === process.cwd()) {
  specs = path.join('packages', '*', specs);
}

const config = {
  ...wdioConf.config,

  baseUrl: `http://${localIP.address()}:${webpackPort}`,
  specs,

  seleniumDocker: {
    enabled: !process.env.TRAVIS,
  },

  webpackPort,
  webpackConfig,

  beforeHook() {
    // Being Terra tests are executed on an SPA, a full refresh is required
    // in order to reset the site. This ensures customProperty tests and any
    // other dom modifications are cleared before starting a test.
    global.browser.refresh();

    // Ensure the mouse starts in upper left corner before every test.
    // This prevents unwanted hover effects during visual comparison.
    // Note: moveTo() is deprecated, so this simulates that by creating an
    // element that webdriver clicks on that is in the upper left corner of the
    // screen.
    // eslint-disable-next-line func-names, prefer-arrow-callback
    global.browser.execute(function () {
      // eslint-disable-next-line no-var
      var div = document.createElement('div');
      document.body.appendChild(div);
      div.id = 'wdioMouseReset';
      div.style.position = 'absolute';
      div.style.top = 0;
      div.style.left = 0;
      div.style.width = '1px';
      div.style.height = '1px';
      div.style.zIndex = '9999999';
      // eslint-disable-next-line func-names, prefer-arrow-callback
      div.addEventListener('click', function () {
        document.body.removeChild(div);
      });
    });
    global.browser.click('#wdioMouseReset');
  },

  before() {
    /**
    * Adds a custom browser.setCSSCustomProps function
    * @param {Object} properties - An object of key/value CSS custom properties to set.
    */
    // eslint-disable-next-line prefer-arrow-callback, func-names
    browser.addCommand('setCSSCustomProps', function (properties) {
      // eslint-disable-next-line prefer-arrow-callback, func-names
      this.execute(function (props) {
        // eslint-disable-next-line prefer-arrow-callback, func-names
        Object.keys(props).forEach(function (key) {
          document.documentElement.style.setProperty(key, props[key]);
        });
      }, properties);
    });
  },
};


config.services = wdioConf.config.services.concat([WebpackDevService]);
exports.config = config;
