/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
  'Displays a profile image with the props carryforward': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/profile-image-tests/carryforward`)
      .waitForElementPresent('#loadedImage', 1000);
    browser.expect.element('#loadedImage').to.have.css('terra-Image terra-Image--rounded terra-Image--fluid');
  },
  'Displays the avatar image if the profile image was not found and carries forward the props': (browser) => {
    browser.waitForElementPresent('#errorImage', 1000);
    browser.expect.element('#errorImage').to.have.css('terra-Image terra-Image--rounded terra-Image--fluid');
  },
};
