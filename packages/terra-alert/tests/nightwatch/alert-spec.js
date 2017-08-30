/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const { resizeTo, screenWidth } = require('terra-toolkit/lib/nightwatch/responsive-helpers');

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default alert with the provided text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/default`);
    browser.expect.element('#defaultAlert').to.be.present;

    browser.assert.attributeContains('#defaultAlert', 'class', 'alert');
    browser.assert.elementPresent('#defaultAlert > div[class*="body"] > div[class*="icon"] > svg');
    browser.assert.elementPresent('#defaultAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]');
    browser.assert.containsText('#defaultAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Alert.');
    browser.assert.elementPresent('#defaultAlert > div[class*="body"] > div[class*="section"]  div');
    browser.assert.containsText('#defaultAlert > div[class*="body"] > div[class*="section"]  div', 'Default Alert');
  },

  'Displays an Alert of type alert': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/type`);
    browser.expect.element('#alertAlert').to.be.present;

    browser
      .assert.attributeContains('#alertAlert', 'class', 'alert')
      .assert.containsText('#alertAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Alert.')
      .assert.containsText('#alertAlert > div[class*="body"] > div[class*="section"]  div', 'Alert of type Alert');
  },

  'Displays an Alert of type error': (browser) => {
    browser
      .assert.attributeContains('#errorAlert', 'class', 'error')
      .assert.containsText('#errorAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Error.')
      .assert.containsText('#errorAlert > div[class*="body"] > div[class*="section"]  div', 'Alert of type Error');
  },

  'Displays an Alert of type warning': (browser) => {
    browser
      .assert.attributeContains('#warningAlert', 'class', 'warning')
      .assert.containsText('#warningAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Warning.')
      .assert.containsText('#warningAlert > div[class*="body"] > div[class*="section"]  div', 'Alert of type Warning');
  },

  'Displays an Alert of type advisory': (browser) => {
    browser
      .assert.attributeContains('#advisoryAlert', 'class', 'advisory')
      .assert.containsText('#advisoryAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Advisory.')
      .assert.containsText('#advisoryAlert > div[class*="body"] > div[class*="section"]  div', 'Alert of type Advisory');
  },

  'Displays an Alert of type info': (browser) => {
    browser
      .assert.attributeContains('#infoAlert', 'class', 'info')
      .assert.containsText('#infoAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Information.')
      .assert.containsText('#infoAlert > div[class*="body"] > div[class*="section"]  div', 'Alert of type Info');
  },

  'Displays an Alert of type success': (browser) => {
    browser
      .assert.attributeContains('#successAlert', 'class', 'success')
      .assert.containsText('#successAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Success.')
      .assert.containsText('#successAlert > div[class*="body"] > div[class*="section"]  div', 'Alert of type Success');
  },

  'Displays each alert type with a custom title': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/title`);
    browser.expect.element('#alertAlert').to.be.present;

    browser
      .assert.containsText('#alertAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Alert_Alert:')
      .assert.containsText('#errorAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Error_Alert:')
      .assert.containsText('#warningAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Warning_Alert:')
      .assert.containsText('#advisoryAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Advisory_Alert:')
      .assert.containsText('#infoAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Info_Alert:')
      .assert.containsText('#successAlert > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Success_Alert:');
  },

  'Displays custom Alert with no icon, title or custom color': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/custom`);
    browser.expect.element('#custom1').to.be.present;

    browser
      .assert.attributeContains('#custom1', 'class', 'custom')
      .assert.cssProperty('#custom1', 'color', 'rgba(155, 159, 161, 1)')
      .assert.elementNotPresent('#custom1 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom1 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', '')
      .assert.containsText('#custom1 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with no icon, title or custom color');
  },

  'Displays custom Alert with title but no icon or custom color': (browser) => {
    browser
      .assert.attributeContains('#custom2', 'class', 'custom')
      .assert.cssProperty('#custom2', 'color', 'rgba(155, 159, 161, 1)')
      .assert.elementNotPresent('#custom2 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom2 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Custom_Alert:')
      .assert.containsText('#custom2 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with title but no icon or custom color');
  },

  'Displays custom Alert with icon but no title or custom color': (browser) => {
    browser
      .assert.attributeContains('#custom3', 'class', 'custom')
      .assert.cssProperty('#custom3', 'color', 'rgba(155, 159, 161, 1)')
      .assert.elementPresent('#custom3 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom3 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', '')
      .assert.containsText('#custom3 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with icon but no title or custom color');
  },

  'Displays custom Alert with custom color but no title or icon': (browser) => {
    browser
      .assert.attributeContains('#custom4', 'class', 'custom')
      .assert.cssProperty('#custom4', 'color', 'rgba(255, 165, 0, 1)')
      .assert.elementNotPresent('#custom4 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom4 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', '')
      .assert.containsText('#custom4 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with custom color but no title or icon');
  },

  'Displays custom Alert with custom color and title but no icon': (browser) => {
    browser
      .assert.attributeContains('#custom5', 'class', 'custom')
      .assert.cssProperty('#custom5', 'color', 'rgba(255, 165, 0, 1)')
      .assert.elementNotPresent('#custom5 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom5 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Custom_Alert:')
      .assert.containsText('#custom5 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with custom color and title but no icon');
  },

  'Displays custom Alert with title and icon but no custom color': (browser) => {
    browser
      .assert.attributeContains('#custom6', 'class', 'custom')
      .assert.cssProperty('#custom6', 'color', 'rgba(155, 159, 161, 1)')
      .assert.elementPresent('#custom6 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom6 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Custom_Alert:')
      .assert.containsText('#custom6 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with title and icon but no custom color');
  },

  'Displays custom Alert with custom color and icon but no title': (browser) => {
    browser
      .assert.attributeContains('#custom7', 'class', 'custom')
      .assert.cssProperty('#custom7', 'color', 'rgba(255, 165, 0, 1)')
      .assert.elementPresent('#custom7 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom7 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', '')
      .assert.containsText('#custom7 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with custom color and icon but no title');
  },

  'Displays custom Alert with title, custom color and icon': (browser) => {
    browser
      .assert.attributeContains('#custom8', 'class', 'custom')
      .assert.cssProperty('#custom8', 'color', 'rgba(255, 165, 0, 1)')
      .assert.elementPresent('#custom8 > div[class*="body"] > div[class*="icon"] > svg')
      .assert.containsText('#custom8 > div[class*="body"] > div[class*="section"] > strong[class*="title"]', 'Custom_Alert:')
      .assert.containsText('#custom8 > div[class*="body"] > div[class*="section"]  div', 'Custom Alert with title, custom color and icon');
  },

  'Displays an Alert of type warning with an action button set via the alertAction prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/actionButton`);
    browser.assert.elementPresent('#actionAlert > div[class*="actions"] > button');

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser
        .assert.attributeContains('#actionAlert', 'class', 'narrow')
       .assert.attributeContains('#actionAlert > div[class*="body"]', 'class', 'body-narrow');
    } else {
      browser
        .assert.attributeContains('#actionAlert', 'class', 'wide')
        .assert.attributeContains('#actionAlert > div[class*="body"]', 'class', 'body-std');
    }
  },

  'Displays an Alert of type success with a dismiss button set via the onDismiss prop': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/dismissible`);
    browser.assert.elementPresent('#dismissibleAlert > div[class*="actions"] > button');

    const width = screenWidth(browser);
    if (width <= browser.globals.breakpoints.tiny[0]) {
      browser
        .assert.attributeContains('#dismissibleAlert', 'class', 'narrow')
        .assert.attributeContains('#dismissibleAlert > div[class*="body"]', 'class', 'body-narrow');
    } else {
      browser
        .assert.attributeContains('#dismissibleAlert', 'class', 'wide')
        .assert.attributeContains('#dismissibleAlert > div[class*="body"]', 'class', 'body-std');
    }

    browser
      .waitForElementVisible('#dismissibleAlert', 1000)
      .click('#dismissibleAlert > div[class*="actions"] > button')
      .pause(1000)
      .assert.elementNotPresent('#dismissibleAlert');
  },

  'Displays alerts with actions in small container': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/alert-tests/responsive`);

    browser
      .assert.elementPresent('#actionAlert > div[class*="actions"] > button')
      .assert.elementPresent('#dismissibleAlert > div[class*="actions"] > button')
      .assert.attributeContains('#actionAlert', 'class', 'narrow')
      .assert.attributeContains('#actionAlert > div[class*="body"]', 'class', 'body-narrow')
      .assert.attributeContains('#dismissibleAlert', 'class', 'narrow')
      .assert.attributeContains('#dismissibleAlert > div[class*="body"]', 'class', 'body-narrow')
      .assert.attributeContains('#noActionsAlert', 'class', 'narrow')
      .assert.attributeContains('#noActionsAlert > div[class*="body"]', 'class', 'body-std');
  },
});
