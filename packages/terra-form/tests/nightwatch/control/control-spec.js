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

  'Displays a default Control': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/control/default`)
      .assert.elementPresent('.terra-Form-control');
  },

  'Displays a populated Control with correct label, help message, and choices': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/control/populated`)
      .assert.elementPresent('.terra-Form-control')
      .assert.elementPresent('.terra-Form-control--inline')
      .assert.elementPresent('input[type="checkbox"][name="children_present"][value="children_present"]')
      .assert.elementPresent('span.terra-Form-control-label-text.healtheintent-control-label-text')
      .assert.containsText('label', 'Do you have any Children?');
  },
};
