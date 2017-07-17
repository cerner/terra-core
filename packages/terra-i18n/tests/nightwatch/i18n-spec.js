/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;
const fs = require('fs');
const path = require('path');

function loadTranslationsForLocale(locale) {
  return JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', `${locale}.json`), 'utf8'));
}

const deTranslations = loadTranslationsForLocale('de');
const enTranslations = loadTranslationsForLocale('en');
const enGBTranslations = loadTranslationsForLocale('en-GB');
const enUSTranslations = loadTranslationsForLocale('en-US');
const esTranslations = loadTranslationsForLocale('es');
const fiFITranslations = loadTranslationsForLocale('fi-FI');
const frTranslations = loadTranslationsForLocale('fr');
const ptTranslations = loadTranslationsForLocale('pt');

const defaultTranslations = enTranslations;

const waitInms = 3000;


module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-i18n', done);
  },

  'Displays ajax error message in default': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms);

    browser.expect.element('div').text.to.contain(defaultTranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in de': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="de"]');

    browser.expect.element('div').text.to.contain(deTranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in en': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="en"]');

    browser.expect.element('div').text.to.contain(enTranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in en-GB': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="en-GB"]');

    browser.expect.element('div').text.to.contain(enGBTranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in en-US': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="en-US"]');

    browser.expect.element('div').text.to.contain(enUSTranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in es': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="es"]');

    browser.expect.element('div').text.to.contain(esTranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in fi-FI': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="fi-FI"]');

    browser.expect.element('div').text.to.contain(fiFITranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in fr': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="fr"]');

    browser.expect.element('div').text.to.contain(frTranslations['Terra.ajax.error']).before(waitInms);
  },

  'Displays ajax error message in pt': (browser) => {
    browser
      .url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/i18n-tests/default`)
      .waitForElementVisible('select', waitInms)
      .click('select option[value="pt"]');

    browser.expect.element('div').text.to.contain(ptTranslations['Terra.ajax.error']).before(waitInms);
  },
};
