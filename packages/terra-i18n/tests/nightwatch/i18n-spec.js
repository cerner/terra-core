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

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays ajax error message in default': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .assert.containsText('div', defaultTranslations['Terra.ajax.error']);
  },

  'Displays ajax error message in de': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="de"]')
      .assert.containsText('div', deTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in en': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="en"]')
      .assert.containsText('div', enTransaltions['Terra.ajax.error']);
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

  'Displays ajax error message in es': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="es"]')
      .assert.containsText('div', esTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in fi-FI': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="fi-FI"]')
      .assert.containsText('div', fiFITransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in fr': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="fr"]')
      .assert.containsText('div', frTransaltions['Terra.ajax.error']);
  },

  'Displays ajax error message in pt': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .click('select option[value="pt"]')
      .assert.containsText('div', ptTransaltions['Terra.ajax.error']);
  },
};
