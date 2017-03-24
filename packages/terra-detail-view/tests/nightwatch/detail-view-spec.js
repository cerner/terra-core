/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a divided Detail View with provided components': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/detail-view-tests/detail-view-divided`);
  },
  'Displays a Detail View that is not divided with provided components': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/detail-view-tests/detail-view-no-divider`);
    browser.assert.elementNotPresent('.terra-DetailView-divider');
  },
};

