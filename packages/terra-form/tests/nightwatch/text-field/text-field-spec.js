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

  'Displays a default TextField with a text input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/text-field/default`)
      .assert.elementPresent('#default-text-field')
      .assert.elementPresent('input[type="text"]');
  },

  'Displays a populated inline TextField with correct label, help message, and error message': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/text-field/populated`)
      .assert.elementPresent('#populated-text-field')
      .assert.containsText('label', 'Associate ID')
      .assert.containsText('small', 'This is the ID you were given during orientation')
      .assert.containsText('small:nth-child(4)', 'Associate ID is required');
  },
};
