/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays text as default': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-display-tests/default`);
    browser.expect.element('.terra-CompactCard-display').to.be.present;
  },
  'Displays text with different styles': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-display-tests/default`);
    browser.expect.element('.terra-CompactCard-display').to.be.present;
  },
  'Displays text with an icon': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-display-tests/default`);
    browser.expect.element('.terra-CompactCard-display').to.be.present;
  },
};
