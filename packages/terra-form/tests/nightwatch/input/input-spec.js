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

  'Displays a default Input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/input/default`)
      .assert.elementPresent('input');
  },

  'Properly initializes Input as uncontrolled when passed defaultValue': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/input/populated_uncontrolled`)
      .assert.elementPresent('input[name="foo"][value="bar"][required]')
      .clearValue('input[name="foo"]')
      .setValue('input[name="foo"][value="bar"]', 'New Value')
      .assert.value('input[name="foo"]', 'New Value');
  },

  'Properly initializes Input as controlled when passed value and onChange': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/input/populated_controlled`)
      .assert.elementPresent('input[name="foo"][value="Jack"][required]')
      .clearValue('input[name="foo"]')
      .setValue('input[name="foo"]', 'New Value')
      .assert.value('input[name="foo"]', 'New Value');
  },
};
