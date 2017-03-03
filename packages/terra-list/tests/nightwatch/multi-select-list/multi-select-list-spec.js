/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays a default multi select list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/default`)
      .assert.elementPresent('.terra-List');
  },
  'Displays a items in the list': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/items`)
      .assert.elementPresent('.terra-List');
  },
  'Displays a items in the list divided': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/items-divided`)
      .assert.cssClassPresent('.terra-List', 'terra-List-divided');
  },
  'Displays a items in the list with a max selection count': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/max-count`)
      .assert.elementPresent('.terra-List');
  },
  'Displays a items in the list with a function set for on change': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/multi-select-list-tests/on-change`)
      .assert.elementPresent('.terra-List');
  },
};
