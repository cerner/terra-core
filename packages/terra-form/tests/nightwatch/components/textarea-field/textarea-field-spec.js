/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-form', done);
  },

  'Displays a default TextareaField with a number input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea-field/default`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('textarea');
  },

  'Displays a populated TextareaField with correct label, help message, and choices': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea-field/populated`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('.terra-Form-field--inline')
      .assert.containsText('label', 'Profile Description')
      .assert.containsText('.terra-Form-helpText', 'The name given to you at birth.')
      .assert.containsText('.terra-Form-error', 'Name is required');
  },
};
