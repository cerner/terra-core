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

  'Displays a default Fieldset': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/fieldset/default`)
      .assert.elementPresent('.terra-Form-fieldset');
  },

  'Displays a populated inline Fieldset with correct legend, help message, and error message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/fieldset/populated`)
      .assert.elementPresent('.terra-Form-fieldset')
      .assert.elementPresent('.terra-Form-fieldset--inline')
      .assert.elementPresent('.terra-Form-legend.healtheintent-application')
      .assert.containsText('.terra-Form-legend.healtheintent-application', 'Do you have any Children?')
      .assert.containsText('.terra-Form-helpText', 'Families are eligible for family package plans')
      .assert.containsText('.terra-Form-error', 'This field is required');
  },
};
