// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/default-toggle-button`)
      .assert.elementPresent('#toggleButton');
  },

  'Displays a toggle-button with customized button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/customized-button-toggle-button`)
      .assert.elementPresent('#emphasisButton');
  },

  'Displays a toggle-button with customized closedButtonText': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/closed-button-text`)
      .assert.containsText('#closedButtonText button > span > span:nth-child(2)', 'Custom Text');
  },

  'Displays a toggle-button with customized icon': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/custom-icon`)
      .assert.elementPresent('#custom-icon');
  },

  'Displays an animated toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/animated`)
      .assert.elementPresent('#animatedToggle');
  },

  'Displays a toggle-button with animated icon': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/icon-animated`)
      .assert.elementPresent('#animatedIcon');
  },

  'Displays an icon only toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/icon-only`)
      .assert.attributeContains('#iconOnlyToggleButton > button', 'aria-label', 'Custom Text')
      .assert.containsText('#iconOnlyToggleButton > button', '');
  },

  'Displays an initially open toggle-button': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/initially-open`)
      .assert.attributeContains('#initiallyOpenToggleButton > button + div', 'aria-hidden', 'false');
  },

  'Displays a toggle-button with customized openedButtonText': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/opened-button-text`)
      .click('#openedButtonText button')
      .assert.containsText('#openedButtonText button > span > span:nth-child(2)', 'Custom Text 2');
  },

  'Triggers onOpen callback for ToggleButton when button is selected': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/toggle-button/on-open-toggle-button`);

    browser
      .click('#onOpenToggleButton button') // Open ToggleButton
      .assert.containsText('#on-open-event', 'Times Opened: 1')
      .click('#onOpenToggleButton button'); // Close ToggleButton

    browser
      .sendKeys('#onOpenToggleButton button', browser.Keys.SPACE) // Open ToggleButton
      .assert.containsText('#on-open-event', 'Times Opened: 2')
      .sendKeys('#onOpenToggleButton button', browser.Keys.SPACE);  // Close ToggleButton

    browser
      .sendKeys('#onOpenToggleButton button', browser.Keys.ENTER) // Open ToggleButton
      .assert.containsText('#on-open-event', 'Times Opened: 3');
  },

  'Triggers onClose callback for ToggleButton when button is selected': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/toggle-button/on-close-toggle-button`);

    browser
      .click('#onCloseToggleButton button') // Open ToggleButton
      .click('#onCloseToggleButton button') // Close ToggleButton
      .assert.containsText('#on-close-event', 'Times Closed: 1');

    browser
      .click('#onCloseToggleButton button') // Open ToggleButton
      .sendKeys('#onCloseToggleButton button', browser.Keys.SPACE) // Close ToggleButton
      .assert.containsText('#on-close-event', 'Times Closed: 2');

    browser
      .sendKeys('#onCloseToggleButton button', browser.Keys.SPACE) // Open ToggleButton
      .sendKeys('#onCloseToggleButton button', browser.Keys.ENTER) // Close ToggleButton
      .assert.containsText('#on-close-event', 'Times Closed: 3');
  },

  'Display toggle-button content when button is clicked': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/toggle-button/default-toggle-button`)
      .click('#toggleButton button')
      .waitForElementPresent('#toggleButton > button + div', 1000)
      .expect.element('#toggleButton > button + div').to.have.attribute('aria-hidden').to.equal('false');
  },
});
