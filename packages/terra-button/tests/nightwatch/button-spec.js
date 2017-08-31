// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/default`)
      .assert.containsText('#defaultButton', 'Default');
  },

  'Wraps long text at smaller screen sizes': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/long-text`)
      .assert.containsText('#longTextButton', 'Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long Long');
  },

  'Displays a disabled button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/disabled`)
      .assert.containsText('#disabledButton', 'Disabled Button');
  },

  'Displays a disabled link with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/disabled-link`)
      .assert.containsText('#disabledLink', 'Disabled Link');
  },

  'Displays as a primary button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/primary`)
      .assert.containsText('#primaryButton', 'Primary');
  },

  'Displays as a secondary button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/secondary`)
      .assert.containsText('#secondaryButton', 'Secondary');
  },

  'Displays as a link with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/link`)
      .assert.containsText('#linkButton', 'Link');
  },

  'Displays as a tiny button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/tiny`)
      .assert.containsText('#tinyButton', 'Tiny');
  },

  'Displays as a small button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/small`)
      .assert.containsText('#smallButton', 'Small');
  },

  'Displays as a medium button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/medium`)
      .assert.containsText('#mediumButton', 'Medium');
  },

  'Displays as a large button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/large`)
      .assert.containsText('#largeButton', 'Large');
  },

  'Displays as a huge button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/huge`)
      .assert.containsText('#hugeButton', 'Huge');
  },

  'Displays as a button with the type set to button and with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/with-type-button`)
      .assert.containsText('#buttonWithTypeButton', 'Button Type is Default');
  },

  'Displays as a button with the type set to reset and with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/with-type-reset`)
      .assert.containsText('#buttonWithTypeReset', 'Button Type is Reset');
  },

  'Displays as a button with the type set to submit and with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/with-type-submit`)
      .assert.containsText('#buttonWithTypeSubmit', 'Button Type is Submit');
  },

  'Displays an icon inline with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/icon-default`)
      .assert.containsText('#iconDefaultButton > :last-child', 'Button with Icon')
      .assert.cssClassPresent('#iconDefaultButton > :first-child', 'test');
  },

  'Displays an icon only': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/icon-only`)
      .assert.cssClassPresent('#iconOnlyButton > :first-child', 'test');
  },

  'Displays a button with icons and text reversed': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/icon-reversed`)
      .assert.containsText('#iconReversedButton > :first-child', 'Button with Icon and reversed')
      .assert.cssClassPresent('#iconReversedButton > :last-child', 'test');
  },

  'Displays as a compact button with the provided text': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/button-tests/compact`)
      .assert.containsText('#buttonCompact', 'Compact');
  },
});
