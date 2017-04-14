/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a default modal with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/modal-tests/default`)
      .assert.containsText('.terra-Modal', 'Default');
  },
};

