/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a default table with no stripes with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/table-tests/default`);

    browser.expect.element('.terra-Table--striped').to.not.be.present;
  },
};

