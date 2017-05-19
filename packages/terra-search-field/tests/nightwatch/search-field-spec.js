/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-search-field', done);
  },

  'Displays a search field with search button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-field-tests/default`)
      .assert.elementPresent('.terra-SearchField')
      .assert.elementPresent('.terra-SearchField-button')
      .assert.attributeEquals('.terra-SearchField-input', 'placeholder', '');
  },

  'Displays a search field with a placeholder': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/search-field-tests/placeholder`)
      .assert.elementPresent('.terra-SearchField')
      .assert.elementPresent('.terra-SearchField-button')
      .assert.attributeEquals('.terra-SearchField-input', 'placeholder', 'Search Text');
  },
};

