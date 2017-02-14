/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('../../lib/index').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Runs the test suite correctly': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/`)
      .assert.containsText('.test', 'Test');
  },
};
