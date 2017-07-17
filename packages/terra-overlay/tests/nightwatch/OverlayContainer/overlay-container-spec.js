/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-overlaycontainer', done);
  },

  'Displays a default OverlayContainer': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/overlay-container-tests/default`);
    browser.assert.attributeEquals('#terra-OverlayContainer', 'tabIndex', '-1');
  },
};
