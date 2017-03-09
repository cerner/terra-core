/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays text as default': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/displays-tests/default`)
      .assert.cssClassPresent('.terra-CompactTile-display > :first-child', 'test');
  },
  'Displays text with different styles': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/display-tests/text-style`)
      .assert.cssClassPresent('.terra-CompactTile-display > :first-child', 'test');
  },
  'Displays text with an icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/display-tests/icon`)
      .assert.cssClassPresent('.terra-CompactTile-display > :first-child', 'test');
  },
};
