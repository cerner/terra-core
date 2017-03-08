/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a compact tile with default props': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/comment-tests/default`)
      .assert.cssClassPresent('.terra-CompactTile-comment > :first-child', 'test');
  },
  'Displays a compact tile with displays present': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/comment-tests/text`)
      .assert.cssClassPresent('.terra-CompactTile-comment > :first-child', 'test');
  },
};
