/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-loadingoverlay', done);
  },

  'Displays a default LoadingOverlay': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/default`);
    browser.assert.containsText('#terra-LoadingOverlay:nth-child(1)', 'Loading...');
  },

  'Displays a fullscreen LoadingOverlay as the default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/default`);
  },

  'Displays a LoadingOverlay relative to the triggering container': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/container`);
  },

  'Displays a LoadingOverlay with a custom message': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/custom-message`);
    browser.assert.containsText('#terra-LoadingOverlay:nth-child(1)', 'Custom Loading Message');
  },

  'Displays a LoadingOverlay with an animated icon': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/animated`);
  },

  'Displays a LoadingOverlay with a light theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/light-themed`);
  },

  'Displays a LoadingOverlay with a dark theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/dark-themed`);
  },

  'Displays a LoadingOverlay with a clear theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/clear-themed`);
  },
};
