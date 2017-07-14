/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-content-container', done);
  },

  'Displays a content container with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/content-container-tests/default`);
    browser.expect.element('.terra-ContentContainer').to.be.present;
    browser.expect.element('.terra-ContentContainer--filler').to.not.be.present;
    browser.expect.element('.terra-ContentContainer .terra-ContentContainer-header').to.be.present;
    browser.expect.element('.terra-ContentContainer .terra-ContentContainer-main').to.be.present;
    browser.expect.element('.terra-ContentContainer .terra-ContentContainer-main-normalizer').to.be.present;
  },
  'Displays a content container with fill': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/content-container-tests/fill`)
      .assert.cssClassPresent('.terra-ContentContainer', 'terra-ContentContainer--fill');
  },
};
