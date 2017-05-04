/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-form', done);
  },

  'Displays a default ChoiceField': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/multi-choice-field/default`)
      .assert.elementPresent('.terra-Form-field');
  },

  'Displays a populated ChoiceField with correct label, help message, and choices': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/multi-choice-field/populated`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('input[type="checkbox"][name="language"][value="c"]')
      .assert.elementPresent('input[type="checkbox"][name="language"][value="java"]')
      .assert.elementPresent('input[type="checkbox"][name="language"][value="ruby"]')
      .assert.elementPresent('input[type="checkbox"][name="language"][value="c++"]')
      .assert.elementPresent('input[type="checkbox"][name="language"][value="javascript"]')
      .assert.containsText('.terra-Form-field', 'Mark all of the programming languages you know')
      .assert.containsText('.terra-Form-helpText', 'Every check should indicate at least 3 months of experience')
      .assert.containsText('.terra-Form-field', 'C')
      .assert.containsText('.terra-Form-field', 'Java')
      .assert.containsText('.terra-Form-field', 'Ruby')
      .assert.containsText('.terra-Form-field', 'C++')
      .assert.containsText('.terra-Form-field', 'JavaScript');
  },
};
