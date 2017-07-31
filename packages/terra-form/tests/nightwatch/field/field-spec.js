/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-form', done);
  },

  'Displays a default Field': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/field/default`)
      .assert.elementPresent('#default-field');
  },

  'Displays a populated inline Field with correct label, help message, and error message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/field/populated`)
      .assert.elementPresent('#populated-field')
      .assert.containsText('label', 'Do you have any Children?')
      .assert.containsText('small', 'Families are eligible for family package plans')
      .assert.containsText('small:nth-child(3)', 'This field is required');
  },
};
