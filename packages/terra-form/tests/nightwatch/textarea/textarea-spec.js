/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-form', done);
  },

  'Displays a default Textarea with a number input': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea/default`)
      .assert.elementPresent('textarea');
  },

  'Displays a populated Textarea with correct name': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea/populated_uncontrolled`)
      .assert.elementPresent('textarea[name="job_experience"]');
  },

  'Properly initializes Textarea as uncontrolled when passed defaultValue': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea/populated_uncontrolled`)
      .assert.elementPresent('textarea[name="job_experience"][required]')
      .clearValue('textarea[name="job_experience"]')
      .setValue('textarea[name="job_experience"]', '3 Years JavaScript')
      .assert.value('textarea[name="job_experience"]', '3 Years JavaScript');
  },

  'Properly initializes Textarea as controlled when passed value and onChange': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/form-tests/textarea/populated_controlled`)
      .assert.elementPresent('textarea[name="job_experience"][required]')
      .clearValue('textarea[name="job_experience"]')
      .setValue('textarea[name="job_experience"]', '3 Years JavaScript')
      .assert.value('textarea[name="job_experience"]', '3 Years JavaScript');
  },
};
