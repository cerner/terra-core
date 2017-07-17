/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-profile-image', done);
  },

  'Displays a profile image': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/profile-image-tests/default`)
      .waitForElementPresent('#loadedImage', 1000);
  },
  'Displays the avatar image if the profile image was not found': (browser) => {
    browser
      .waitForElementPresent('#errorImage', 1000);
  },
};
