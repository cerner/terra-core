/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-image', done);
  },

  'Displays an image with default options': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/image-tests/default`);
  },
  'Displays non fluid image examples': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/image-tests/non-fluid`);
  },
  'Displays fluid image examples': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/image-tests/fluid`);
  },
  'Displays an image that successfully loaded': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/image-tests/loading`)
      .waitForElementPresent('#loadedImage', 1000);
  },
  'Displays an image that failed to load': (browser) => {
    browser.waitForElementPresent('#errorImage', 1000);
  },
};
