/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-form', done);
  },

  'Displays a default TextField with a text input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/text-field/default`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('input[type="text"]');
  },

  'Displays a populated TextField with correct label, help message, and choices': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/text-field/populated_uncontrolled`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('.terra-Form-field--inline')
      .assert.containsText('label', 'Associate ID')
      .assert.containsText('.terra-Form-helpText', 'This is the ID you were given during orientation')
      .assert.containsText('.terra-Form-error', 'Associate ID is required');
  },

  'Properly initializes TextareaField as uncontrolled when passed defaultValue': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/text-field/populated_uncontrolled`)
      .assert.elementPresent('input[name="associate_id"][type="text"][required]')
      .clearValue('input[name="associate_id"]')
      .setValue('input[name="associate_id"]', 'ABC0123456')
      .assert.value('input[name="associate_id"]', 'ABC0123456');
  },

  'Properly initializes TextareaField as controlled when passed value and onChange': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/text-field/populated_controlled`)
      .assert.elementPresent('input[name="associate_id"][type="text"][required]')
      .clearValue('input[name="associate_id"]')
      .setValue('input[name="associate_id"]', 'ABC0123456')
      .assert.value('input[name="associate_id"]', 'ABC0123456');
  },
};
