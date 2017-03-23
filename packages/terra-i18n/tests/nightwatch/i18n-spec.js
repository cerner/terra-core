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
