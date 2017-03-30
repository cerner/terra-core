/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('../../lib/index').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-toolkit', done);
  },

  'Runs the test suite correctly': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/`)
      .assert.containsText('.test', 'Test');
  },
};
