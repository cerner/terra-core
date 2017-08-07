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

  'Displays a SelectField with a single option, using deprecated choices prop': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/choices_prop`)
      .assert.elementPresent('#prop-select-field')
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
      .assert.value('select[name="zounds"]', 'b')
      .assert.containsText('select[name="zounds"]', 'boo')
      .setValue('select[name="zounds"]', 'm')
      .assert.value('select[name="zounds"]', 'm')
      .assert.containsText('select[name="zounds"]', 'moo');
  },

  'Displays a populated Select Field with a onChange and value for controlled form submission': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/populated_controlled`)
      .assert.elementPresent('#controlled-populated-select-field')
      .assert.value('select[name="animal"]', 'micros')
      .assert.elementPresent('option:nth-of-type(4)') // 4 options present
      .assert.elementNotPresent('option:nth-of-type(5)');
  },

  'Controlled Select Field correctly submits form data': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/select-field/populated_controlled`)
      .assert.value('select[name="animal"]', 'micros')
      .setValue('select[name="animal"]', 'kittens')
      .click('#select-submit')
      .assert.containsText('#select-submission', 'Submitted with data {"animal":"kittens"}');
  },
};
