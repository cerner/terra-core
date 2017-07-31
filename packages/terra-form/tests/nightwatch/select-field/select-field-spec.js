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

  'Displays a default SelectField with a single option': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/default`)
      .assert.elementPresent('#default-select-field')
      .assert.elementPresent('select')
      .assert.elementPresent('option:nth-of-type(1)') // 1 option present
      .assert.elementNotPresent('option:nth-of-type(2)');
  },

  'Displays a populated SelectField with multiple options': (browser) => {
    browser // Field attributes
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/populated`)
      .assert.elementPresent('#populated-select-field')
      .assert.containsText('label', 'Meddling Kids')
      .assert.containsText('small', 'solve the mystery')
      .assert.containsText('small:nth-child(4)', 'jinkies!');

    browser // Select attributes
      .assert.elementPresent('select')
      .assert.elementPresent('option:nth-of-type(2)') // 2 options present
      .assert.elementNotPresent('option:nth-of-type(3)');
  },

  'Displays a populated SelectField with a defaultValue selected and can change selection': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/populated`)
      .assert.value('select[name="zounds"]', 'boo')
      .setValue('select[name="zounds"]', 'moo')
      .assert.value('select[name="zounds"]', 'moo');
  },
};
