/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
      .waitForElementVisible('.terra-Status', 1000)
      .expect.element('.terra-Status').text.to.contain('Sample text');
  },
  'Displays arrange status example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/arrange`)
      .waitForElementVisible('.terra-Status', 1000)
      .expect.element('.terra-Status').text.to.contain('Sample text');
  },
  'Displays icon status example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/icon`)
      .waitForElementVisible('.terra-Status', 1000);
  },
  'Displays image status example': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/status-tests/image`)
      .waitForElementVisible('.terra-Status', 1000);
  },
};
