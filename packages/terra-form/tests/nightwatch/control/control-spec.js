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
      .assert.elementPresent('#default-control');
  },

  'Displays a populated Control with correct label, help message, and choices': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/control/populated`)
      .assert.elementPresent('#populated-control')
      .assert.elementPresent('input[type="checkbox"][name="children_present"][value="children_present"]')
      .assert.containsText('label', 'Do you have any Children?');
  },
};
