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

  'Displays a collapse with customized button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/customized-button`)
      .assert.cssClassPresent('.terra-Button', 'terra-Button--link');
  },

  'Displays a collapse with customized closedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/closed-button-text`)
      .assert.containsText('.terra-Collapse-buttonText', 'Custom Text');
  },

  'Displays a collapse with customized icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/customized-icon`)
      .assert.elementPresent('#custom-icon');
  },

  'Displays an animated collapse': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/animated`)
      .assert.elementPresent('.terra-Toggler.is-animated');
  },

  'Displays a collapse with animated icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/icon-animated`)
      .assert.elementPresent('.terra-Collapse.is-icon-animated');
  },

  'Displays an icon only collapse': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/icon-only`)
      .assert.attributeContains('.terra-Button', 'aria-label', 'Custom Text')
      .assert.containsText('.terra-Button', '');
  },

  'Displays an initially open collapse': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/initially-open`)
      .assert.attributeContains('.terra-Toggler', 'aria-hidden', 'false');
  },

  'Displays a collapse with customized openedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/open-button-text`)
      .click('.terra-Button')
      .assert.containsText('.terra-Collapse-buttonText', 'Custom Text');
  },

  'Triggers onOpen callback for Collapse when button is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/on-open-event`)
      .click('.terra-Button')
      .assert.containsText('#on-open-event', 'Times Opened: 1')
      .click('.terra-Button') // Close Collapse
      .sendKeys('.terra-Button', browser.Keys.SPACE)
      .assert.containsText('#on-open-event', 'Times Opened: 2')
      .sendKeys('.terra-Button', browser.Keys.SPACE)  // Close Collapse
      .sendKeys('.terra-Button', browser.Keys.ENTER)
      .assert.containsText('#on-open-event', 'Times Opened: 3');
  },

  'Triggers onClose callback for Collapse when button is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/on-close-event`)
      .click('.terra-Button') // Open Collapse
      .click('.terra-Button')
      .assert.containsText('#on-close-event', 'Times Closed: 1')
      .click('.terra-Button') // Open Collapse
      .sendKeys('.terra-Button', browser.Keys.SPACE)
      .assert.containsText('#on-close-event', 'Times Closed: 2')
      .sendKeys('.terra-Button', browser.Keys.SPACE) // Open Collapse
      .sendKeys('.terra-Button', browser.Keys.ENTER)
      .assert.containsText('#on-close-event', 'Times Closed: 3');
  },


  'Display collapse content when button is clicked': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/collapse-tests/default`)
      .click('.terra-Button')
      .waitForElementPresent('.terra-Toggler', 1000)
      .expect.element('.terra-Toggler').to.have.attribute('aria-hidden').to.equal('false');
  },
};
