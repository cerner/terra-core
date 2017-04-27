/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const screenshot = require('terra-toolkit').screenshot;
const fs = require('fs');
const path = require('path');

const deTranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'de.json'), 'utf8'));
const enTranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'en-US.json'), 'utf8'));
const enGBTranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'en-GB.json'), 'utf8'));
const enUSTranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'en.json'), 'utf8'));
const esTranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'es.json'), 'utf8'));
const fiFITranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'fi-FI.json'), 'utf8'));
const frTranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'fr.json'), 'utf8'));
const ptTranslations = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', '..', 'translations', 'pt.json'), 'utf8'));

const defaultTranslations = enTranslations;

const waitInms = 1000;

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
