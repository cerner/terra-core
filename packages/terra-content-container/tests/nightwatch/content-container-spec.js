/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, '#content-container', done);
  },

  'Displays a content container with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/content-container-tests/default`);
    browser.expect.element('#content-container').to.be.present;
    browser.expect.element('#content-container').to.have.attribute('class').which.not.contains('fill');
    browser.expect.element('#content-container div:nth-child(1)').text.to.contain('header');
    browser.expect.element('#content-container div:nth-child(2)').text.to.contain('content');
  },

  'Displays a content container with fill': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/content-container-tests/fill`)
      .expect.element('#content-container').to.have.attribute('class').which.contains('fill');
  },
};
