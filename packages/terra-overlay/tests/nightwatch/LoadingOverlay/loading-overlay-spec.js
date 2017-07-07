/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
    browser.assert.elementPresent('.terra-LoadingOverlay');
    browser.assert.elementPresent('.terra-LoadingOverlay-icon');
    browser.assert.containsText('.terra-LoadingOverlay-message', 'Loading...');
  },

  'Displays a fullscreen LoadingOverlay as the default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/default`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--fullscreen');
  },

  'Displays a LoadingOverlay relative to the triggering container': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/container`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--container');
  },

  'Displays a LoadingOverlay with a custom message': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/custom-message`);
    browser.assert.containsText('.terra-LoadingOverlay-message', 'Custom Loading Message');
  },

  'Displays a LoadingOverlay with an animated icon': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/animated`);
    browser.assert.cssClassPresent('.terra-Icon', 'is-spin');
  },

  'Displays a LoadingOverlay with a light theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/light-themed`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--light');
  },

  'Displays a LoadingOverlay with a dark theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/dark-themed`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--dark');
  },

  'Displays a LoadingOverlay with a clear theme': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/loading-overlay-tests/clear-themed`);
    browser.assert.cssClassPresent('.terra-Overlay', 'terra-Overlay--clear');
  },
};
