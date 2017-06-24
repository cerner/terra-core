/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-toggle-button', done);
  },

  'Displays a default toggle-button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/default`)
      .assert.elementPresent('.terra-ToggleButton');
  },

  'Displays a toggle-button with customized button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/customized-button`)
      .assert.cssClassPresent('.terra-Button', 'terra-Button--link');
  },

  'Displays a toggle-button with customized closedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/closed-button-text`)
      .assert.containsText('.terra-ToggleButton-buttonText', 'Custom Text');
  },

  'Displays a toggle-button with customized icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/customized-icon`)
      .assert.elementPresent('#custom-icon');
  },

  'Displays an animated toggle-button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/animated`)
      .assert.elementPresent('.terra-Toggle.is-animated');
  },

  'Displays a toggle-button with animated icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/icon-animated`)
      .assert.elementPresent('.terra-ToggleButton.is-icon-animated');
  },

  'Displays an icon only toggle-button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/icon-only`)
      .assert.attributeContains('.terra-Button', 'aria-label', 'Custom Text')
      .assert.containsText('.terra-Button', '');
  },

  'Displays an initially open toggle-button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/initially-open`)
      .assert.attributeContains('.terra-Toggle', 'aria-hidden', 'false');
  },

  'Displays a toggle-button with customized openedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/open-button-text`)
      .click('.terra-Button')
      .assert.containsText('.terra-ToggleButton-buttonText', 'Custom Text');
  },

  'Triggers onOpen callback for ToggleButton when button is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/on-open-event`)
      .click('.terra-Button')
      .assert.containsText('#on-open-event', 'Times Opened: 1')
      .click('.terra-Button') // Close ToggleButton
      .sendKeys('.terra-Button', browser.Keys.SPACE)
      .assert.containsText('#on-open-event', 'Times Opened: 2')
      .sendKeys('.terra-Button', browser.Keys.SPACE)  // Close ToggleButton
      .sendKeys('.terra-Button', browser.Keys.ENTER)
      .assert.containsText('#on-open-event', 'Times Opened: 3');
  },

  'Triggers onClose callback for ToggleButton when button is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/on-close-event`)
      .click('.terra-Button') // Open ToggleButton
      .click('.terra-Button')
      .assert.containsText('#on-close-event', 'Times Closed: 1')
      .click('.terra-Button') // Open ToggleButton
      .sendKeys('.terra-Button', browser.Keys.SPACE)
      .assert.containsText('#on-close-event', 'Times Closed: 2')
      .sendKeys('.terra-Button', browser.Keys.SPACE) // Open ToggleButton
      .sendKeys('.terra-Button', browser.Keys.ENTER)
      .assert.containsText('#on-close-event', 'Times Closed: 3');
  },


  'Display toggle-button content when button is clicked': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/default`)
      .click('.terra-Button')
      .waitForElementPresent('.terra-Toggle', 1000)
      .expect.element('.terra-Toggle').to.have.attribute('aria-hidden').to.equal('false');
  },
};
