/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
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
      .assert.elementPresent('#toggleButton');
  },

  'Displays a toggle-button with customized button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/customized-button`)
      .assert.elementPresent('#linkButton');
  },

  'Displays a toggle-button with customized closedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/closed-button-text`)
      .assert.containsText('#closedButtonText button > div > div:nth-child(2) > span', 'Custom Text');
  },

  'Displays a toggle-button with customized icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/customized-icon`)
      .assert.elementPresent('#custom-icon');
  },

  'Displays an animated toggle-button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/animated`)
      .assert.elementPresent('#animatedToggle');
  },

  'Displays a toggle-button with animated icon': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/icon-animated`)
      .assert.elementPresent('#animatedIcon');
  },

  'Displays an icon only toggle-button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/icon-only`)
      .assert.attributeContains('button', 'aria-label', 'Custom Text')
      .assert.containsText('button', '');
  },

  'Displays an initially open toggle-button': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/initially-open`)
      .assert.attributeContains('button + div', 'aria-hidden', 'false');
  },

  'Displays a toggle-button with customized openedButtonText': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/open-button-text`)
      .click('button')
      .assert.containsText('#openedButtonText button > div > div:nth-child(2) > span', 'Custom Text 2');
  },

  'Triggers onOpen callback for ToggleButton when button is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/on-open-event`)
      .click('button')
      .assert.containsText('#on-open-event', 'Times Opened: 1')
      .click('button') // Close ToggleButton
      .sendKeys('button', browser.Keys.SPACE)
      .assert.containsText('#on-open-event', 'Times Opened: 2')
      .sendKeys('button', browser.Keys.SPACE)  // Close ToggleButton
      .sendKeys('button', browser.Keys.ENTER)
      .assert.containsText('#on-open-event', 'Times Opened: 3');
  },

  'Triggers onClose callback for ToggleButton when button is selected': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/on-close-event`)
      .click('button') // Open ToggleButton
      .click('button')
      .assert.containsText('#on-close-event', 'Times Closed: 1')
      .click('button') // Open ToggleButton
      .sendKeys('button', browser.Keys.SPACE)
      .assert.containsText('#on-close-event', 'Times Closed: 2')
      .sendKeys('button', browser.Keys.SPACE) // Open ToggleButton
      .sendKeys('button', browser.Keys.ENTER)
      .assert.containsText('#on-close-event', 'Times Closed: 3');
  },


  'Display toggle-button content when button is clicked': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/toggle-button-tests/default`)
      .click('button')
      .waitForElementPresent('button + div', 1000)
      .expect.element('button + div').to.have.attribute('aria-hidden').to.equal('false');
  },
};
