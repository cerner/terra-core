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
      .waitForElementPresent('.terra-Grid', 1000)
      .expect.element('.terra-Grid').to.have.attribute('class').which.contains('terra-Grid');
  },

  'Displays a responsive grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/grid-tests/responsive`)
      .waitForElementPresent('.terra-Grid', 1000)
      .expect.element('.terra-Grid').to.have.attribute('class').which.contains('terra-Grid');
  },

  'Displays a nested grid': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/grid-tests/nested`)
      .waitForElementPresent('.terra-Grid', 1000)
      .expect.element('.terra-Grid').to.have.attribute('class').which.contains('terra-Grid');
  },
};
