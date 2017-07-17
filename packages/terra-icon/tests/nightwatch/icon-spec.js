/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-icon', done);
  },

  'Displays a default icon with aria-hidden equal to true': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('aria-hidden').which.contains('true');
  },

  'Displays a default icon with height equal to 1em': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('height').which.contains('1em');
  },

  'Displays a default icon with width equal to 1em': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('width').which.contains('1em');
  },

  'Displays a default icon with focusable equal to false': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/default`)
      .waitForElementPresent('#icon-default', 1000)
      .expect.element('#icon-default').to.have.attribute('focusable').which.contains('false');
  },

  'Displays an icon with an appended css class': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/append-class`)
      .waitForElementPresent('#append-class-custom', 1000)
      .expect.element('#append-class-custom').to.have.attribute('class').which.contains('custom-class');
  },

  'Displays icon example where the ariaLabel is given': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/aria`)
      .waitForElementPresent('#icon-aria-label', 1000)
      .expect.element('#icon-aria-label').to.have.attribute('role').which.contains('img');

    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/aria`)
      .waitForElementPresent('#icon-aria-label', 1000)
      .expect.element('#icon-aria-label').to.not.have.attribute('aria-hidden');
  },

  'Displays icon height and width examples': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/height-width`)
      .waitForElementPresent('#icon-width-5em', 1000)
      .expect.element('#icon-height-5em').to.have.attribute('height').which.contains('5em');

    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/height-width`)
      .waitForElementPresent('#icon-width-5em', 1000)
      .expect.element('#icon-width-5em').to.have.attribute('width').which.contains('5em');

    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/height-width`)
      .waitForElementPresent('#icon-height-50-width-50', 1000)
      .expect.element('#icon-height-50-width-50').to.have.attribute('width').which.contains('50');
  },

  'Displays icon bidirectionality examples': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/icon-tests/bidi`);
  },
};
