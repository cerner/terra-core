/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-form', done);
  },

  'Displays a default NumberField with a number input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/number-field/default`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('input[type="number"]');
  },

  'Displays a populated NumberField with correct label, help message, and choices': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/number-field/populated_uncontrolled`)
      .assert.elementPresent('.terra-Form-field')
      .assert.elementPresent('.terra-Form-field--inline')
      .assert.containsText('label', 'Sales Tax Rate')
      .assert.containsText('.terra-Form-helpText', "Your county's office may have this information")
      .assert.containsText('.terra-Form-error', 'This field is required');
  },

  'Properly initializes NumberField as uncontrolled when passed defaultValue': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/number-field/populated_uncontrolled`)
      .assert.elementPresent('input[name="sales_tax_rate"][type="number"]')
      .clearValue('input[name="sales_tax_rate"][type="number"]')
      .setValue('input[name="sales_tax_rate"][type="number"]', 0.85)
      .assert.value('input[name="sales_tax_rate"]', '0.85');
  },

  'Properly initializes NumberField as controlled when passed value and onChange': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/number-field/populated_controlled`)
      .assert.elementPresent('input[name="sales_tax_rate"][type="number"]')
      .clearValue('input[name="sales_tax_rate"][type="number"]')
      .setValue('input[name="sales_tax_rate"][type="number"]', 0.85)
      .assert.value('input[name="sales_tax_rate"]', '0.85');
  },
};
