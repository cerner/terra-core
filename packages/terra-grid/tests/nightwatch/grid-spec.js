/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
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
      .assert.elementPresent('#grid');
  },

  'Displays a responsive grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/grid-tests/responsive`)
      .assert.elementPresent('#grid');
  },

  'Displays a nested grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/grid-tests/nested`)
      .assert.elementPresent('#grid');
  },
};
