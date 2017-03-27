/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a default list with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/default`)
      .assert.elementPresent('.terra-List');
  },
  'Displays a items list with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/items`)
      .assert.elementPresent('.terra-List');
  },
  'Displays a items divided list with the provided text': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/list-tests/items-divided`)
      .assert.cssClassPresent('.terra-List', 'terra-List-divided');
  },
};
