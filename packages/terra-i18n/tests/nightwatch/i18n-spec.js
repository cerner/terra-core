/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const deTranslations = require('../../lib/translations/de.js').messages;
const enTranslations = require('../../lib/translations/en.js').messages;
const enGBTranslations = require('../../lib/translations/en-GB.js').messages;
const enUSTranslations = require('../../lib/translations/en-US.js').messages;
const esTranslations = require('../../lib/translations/es.js').messages;
const fiFITranslations = require('../../lib/translations/fi-FI.js').messages;
const frTranslations = require('../../lib/translations/fr.js').messages;
const ptTranslations = require('../../lib/translations/pt.js').messages;

const defaultTranslations = enTranslations;

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
      .assert.containsText('div', deTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in en': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="en"]')
      .pause(pauseInms)
      .assert.containsText('div', enTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in en-GB': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="en-GB"]')
      .pause(pauseInms)
      .assert.containsText('div', enGBTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in en-US': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="en-US"]')
      .pause(pauseInms)
      .assert.containsText('div', enUSTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in es': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="es"]')
      .pause(pauseInms)
      .assert.containsText('div', esTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in fi-FI': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="fi-FI"]')
      .pause(pauseInms)
      .assert.containsText('div', fiFITranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in fr': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="fr"]')
      .pause(pauseInms)
      .assert.containsText('div', frTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in pt': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', 1000)
      .click('select option[value="pt"]')
      .pause(pauseInms)
      .assert.containsText('div', ptTranslations['Terra.ajax.error']);
  },
};
