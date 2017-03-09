/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a compact tile with default props': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/default`)
      .assert.cssClassPresent('.terra-CompactCard > :first-child', 'test');
  },
  'Displays a compact tile with displays present': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/displays`)
      .assert.cssClassPresent('.terra-CompactCard > :first-child', 'test');
  },
  'Displays a compact tile with accessories set': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/accessory`)
      .assert.cssClassPresent('.terra-CompactCard > :first-child', 'test');
  },
  'Displays a compact tile with a comment set': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-card-tests/comment`)
      .assert.cssClassPresent('.terra-CompactCard > :first-child', 'test');
  },
};
