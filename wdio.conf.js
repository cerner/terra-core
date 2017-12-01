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
  specs = path.join('packages', '**', specs);
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
