/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a compact card with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-comment-tests/default`);
    browser.expect.element('.terra-CompactCard-comment').to.be.present;
  },
  'Displays a compact card with displays present': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-comment-tests/text`)
      .assert.containsText('.terra-CompactCard-comment', 'test comment');
  },
};
