/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-status', done);
  },

  'Displays a default status': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/default`)
      .waitForElementVisible('#status', 1000)
      .expect.element('#status').text.to.contain('Sample text');
  },
  'Displays arrange status example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/arrange`)
      .waitForElementVisible('#statusArrange', 1000)
      .expect.element('#statusArrange').text.to.contain('Sample text');
  },
  'Displays icon status example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/icon`)
      .waitForElementVisible('#statusIcon', 1000);
  },
  'Displays image status example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/image`)
      .waitForElementVisible('#statusImage', 1000);
  },
  'Displays status with no style': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/no-color`)
      .waitForElementVisible('#statusNoColor', 1000);
  },
};
