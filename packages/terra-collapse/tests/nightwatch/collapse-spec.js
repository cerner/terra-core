/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-collapse', done);
  },

  'Displays a default collapse': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/default`)
      .assert.elementPresent('.terra-Collapse');
  },

  // New
  'Displays a collapse with customized button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/customized-button`)
      .assert.elementPresent('.terra-Collapse');
  },

  'Displays a collapse with customized closedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/closed-button-text`)
      .assert.elementPresent('.terra-Collapse');
  },

  'Displays a collapse with customized icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/customized-icon`)
      .assert.elementPresent('.terra-Collapse');
  },

  'Displays a animated collapse': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/animated`)
      .assert.elementPresent('.terra-Collapse');
  },

  'Displays an initially open collapse': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/initially-open`)
      .assert.elementPresent('.terra-Collapse');
  },

  'Displays a collapse with customized openedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/open-button-text`)
      .assert.elementPresent('.terra-Collapse');
  },

  'Display collapse content when button is clicked': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/default`)
      .click('button')
      .waitForElementPresent('.terra-Toggler', 1000)
      .expect.element('.terra-Toggler').to.have.attribute('aria-hidden').to.equal('false');
  },
};
