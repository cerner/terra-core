// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/default`)
      .assert.elementPresent('#toggleButton');
  },

  'Displays a toggle-button with customized button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/customized-button`)
      .assert.elementPresent('#linkButton');
  },

  'Displays a toggle-button with customized closedButtonText': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/closed-button-text`)
      .assert.containsText('#closedButtonText button > div > div:nth-child(2) > span', 'Custom Text');
  },

  'Displays a toggle-button with customized icon': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/customized-icon`)
      .assert.elementPresent('#custom-icon');
  },

  'Displays an animated toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/animated`)
      .assert.elementPresent('#animatedToggle');
  },

  'Displays a toggle-button with animated icon': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/icon-animated`)
      .assert.elementPresent('#animatedIcon');
  },

  'Displays an icon only toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/icon-only`)
      .assert.attributeContains('button', 'aria-label', 'Custom Text')
      .assert.containsText('button', '');
  },

  'Displays an initially open toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/initially-open`)
      .assert.attributeContains('button + div', 'aria-hidden', 'false');
  },

  'Displays a toggle-button with customized openedButtonText': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/open-button-text`)
      .click('button')
      .assert.containsText('#openedButtonText button > div > div:nth-child(2) > span', 'Custom Text 2');
  },

  'Triggers onOpen callback for ToggleButton when button is selected': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/toggle-button-tests/on-open-event`);

    browser
      .click('button') // Open ToggleButton
      .assert.containsText('#on-open-event', 'Times Opened: 1')
      .click('button'); // Close ToggleButton

    browser
      .sendKeys('button', browser.Keys.SPACE) // Open ToggleButton
      .assert.containsText('#on-open-event', 'Times Opened: 2')
      .sendKeys('button', browser.Keys.SPACE);  // Close ToggleButton

    browser
      .sendKeys('button', browser.Keys.ENTER) // Open ToggleButton
      .assert.containsText('#on-open-event', 'Times Opened: 3');
  },

  'Triggers onClose callback for ToggleButton when button is selected': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/toggle-button-tests/on-close-event`);

    browser
      .click('button') // Open ToggleButton
      .click('button') // Close ToggleButton
      .assert.containsText('#on-close-event', 'Times Closed: 1');

    browser
      .click('button') // Open ToggleButton
      .sendKeys('button', browser.Keys.SPACE) // Close ToggleButton
      .assert.containsText('#on-close-event', 'Times Closed: 2');

    browser
      .sendKeys('button', browser.Keys.SPACE) // Open ToggleButton
      .sendKeys('button', browser.Keys.ENTER) // Close ToggleButton
      .assert.containsText('#on-close-event', 'Times Closed: 3');
  },


  'Display toggle-button content when button is clicked': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/toggle-button-tests/default`)
      .click('button')
      .waitForElementPresent('button + div', 1000)
      .expect.element('button + div').to.have.attribute('aria-hidden').to.equal('false');
  },
});
