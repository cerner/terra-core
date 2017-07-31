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

  'Displays a default NumberField with a number input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/number-field/default`)
      .assert.elementPresent('#default-number-field')
      .assert.elementPresent('input[type="number"]');
  },

  'Displays a populated inline NumberField with correct label, help message, and error message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/number-field/populated`)
      .assert.elementPresent('#populated-number-field')
      .assert.containsText('label', 'Sales Tax Rate')
      .assert.containsText('small', "Your county's office may have this information")
      .assert.containsText('small:nth-child(4)', 'This field is required');
  },
};
