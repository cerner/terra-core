/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-tile-tests/default`)
      .assert.cssClassPresent('.terra-CompactTile > :first-child', 'test');
  },
    'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-tile-tests/displays`)
      .assert.cssClassPresent('.terra-CompactTile > :first-child', 'test');
  },
    'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-tile-tests/accessory`)
      .assert.cssClassPresent('.terra-CompactTile > :first-child', 'test');
  },
    'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/compact-tile-tests/comment`)
      .assert.cssClassPresent('.terra-CompactTile > :first-child', 'test');
  },
};
