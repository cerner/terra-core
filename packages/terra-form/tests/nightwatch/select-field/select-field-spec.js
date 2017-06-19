/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-form', done);
  },

  'Displays a default SelectField with a single option': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/default`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('select')
      .assert.elementPresent('option:nth-of-type(1)') // 1 option present
      .assert.elementNotPresent('option:nth-of-type(2)');
  },

  'Displays a populated SelectField with a defaultValue selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/populated`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('.terra-Form-field--inline')
      .assert.containsText('label', 'Meddling Kids')
      .assert.containsText('.terra-Form-helpText', 'solve the mystery')
      .assert.containsText('.terra-Form-error', 'jinkies!')
      .assert.elementPresent('select')
      .assert.elementPresent('.scooby-snacks')
      .assert.elementPresent('option:nth-of-type(2)') // 2 options present
      .assert.elementNotPresent('option:nth-of-type(3)')
      .assert.value('select[name="zounds"]', 'boo')
      .setValue('select[name="zounds"]', 'moo')
      .assert.value('select[name="zounds"]', 'moo');
  },
};
