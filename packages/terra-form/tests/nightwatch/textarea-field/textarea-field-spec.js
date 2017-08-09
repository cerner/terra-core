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

  'Displays a default TextareaField with a number input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea-field/default`)
      .assert.elementPresent('#default-textarea-field')
      .assert.elementPresent('textarea');
  },

  'Displays a populated inline TextareaField with correct label, help message, and error message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea-field/populated`)
      .assert.elementPresent('#populated-textarea-field')
      .assert.containsText('label', 'Profile Description')
      .assert.containsText('small', 'This is what will be seen on your main page')
      .assert.containsText('small:nth-child(4)', 'Profile Description is required');
  },
};
