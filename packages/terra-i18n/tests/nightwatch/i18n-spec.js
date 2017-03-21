/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const deTransaltions = require('../../lib/translations/de.js').messages;
const enTransaltions = require('../../lib/translations/en.js').messages;
const enGBTransaltions = require('../../lib/translations/en-GB.js').messages;
const enUSTransaltions = require('../../lib/translations/en-US.js').messages;
const esTransaltions = require('../../lib/translations/es.js').messages;
const fiFITransaltions = require('../../lib/translations/fi-FI.js').messages;
const frTransaltions = require('../../lib/translations/fr.js').messages;
const ptTransaltions = require('../../lib/translations/pt.js').messages;

const defaultTranslations = enTransaltions;

const screenshot = require('terra-toolkit').screenshot;

const pauseInms = 1000;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays ajax error message in default': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .assert.containsText('div', defaultTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in de': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="de"]')
      .pause(pauseInms)
      .assert.containsText('div', deTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in en': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="en"]')
      .pause(pauseInms)
      .assert.containsText('div', enTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in en-GB': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="en-GB"]')
      .pause(pauseInms)
      .assert.containsText('div', enGBTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in en-US': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="en-US"]')
      .pause(pauseInms)
      .assert.containsText('div', enUSTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in es': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="es"]')
      .pause(pauseInms)
      .assert.containsText('div', esTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in fi-FI': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="fi-FI"]')
      .pause(pauseInms)
      .assert.containsText('div', fiFITransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in fr': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="fr"]')
      .pause(pauseInms)
      .assert.containsText('div', frTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in pt': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="pt"]')
      .pause(pauseInms)
      .assert.containsText('div', ptTransaltions['Terra.ajax.error']);
  },
};
