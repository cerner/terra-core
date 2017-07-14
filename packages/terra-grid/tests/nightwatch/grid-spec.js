/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-grid', done);
  },

  'Displays a default grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/grid-tests/default`)
      .waitForElementPresent('#grid', 1000);
  },

  'Displays a responsive grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/grid-tests/responsive`)
      .waitForElementPresent('#grid', 1000);
  },

  'Displays a nested grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/grid-tests/nested`)
      .waitForElementPresent('#grid', 1000);
  },
};
