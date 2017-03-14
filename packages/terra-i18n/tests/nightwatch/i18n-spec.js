/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const enTransaltions = require('../../lib/translations/en.js').messages;
const enGBTransaltions = require('../../lib/translations/en-GB.js').messages;
const enUSTransaltions = require('../../lib/translations/en-US.js').messages;
const deTransaltions = require('../../lib/translations/de.js').messages;

const defaultTranslations = enTransaltions;

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays ajax error message in default': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .assert.containsText('div', defaultTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in en-GB': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="en-GB"]')
      .assert.containsText('div', enGBTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in en-US': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="en-US"]')
      .assert.containsText('div', enUSTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in de': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="de"]')
      .assert.containsText('div', deTransaltions['Terra.ajax.error']);
  },
};
