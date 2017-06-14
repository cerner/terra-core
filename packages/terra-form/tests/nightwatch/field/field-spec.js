/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

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
      .assert.elementPresent('.terra-Form-field');
  },

  'Displays a populated inline Field with correct label, help message, and error message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/field/populated`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('.terra-Form-field--inline')
      .assert.elementPresent('.terra-Form-label.healtheintent-application')
      .assert.containsText('label', 'Do you have any Children?')
      .assert.containsText('.terra-Form-helpText', 'Families are eligible for family package plans')
      .assert.containsText('.terra-Form-error', 'This field is required');
  },
};
