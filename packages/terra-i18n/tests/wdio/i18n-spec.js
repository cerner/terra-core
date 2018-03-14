/* global browser, Terra, before */
const i18nSupportedLocales = require('../../src/i18nSupportedLocales');

// Zulu & Zulu-South African locales as test locales (supported by intl)
const testLocales = i18nSupportedLocales.concat(['zu', 'zu-ZA']);

describe('I18n', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  describe('Initial Load', () => {
    before(() => {
      browser.url('/#/tests/i18n-tests/default');
      browser.waitForVisible('select', 3000);
    });

    Terra.should.matchScreenshot();
  });

  testLocales.forEach((locale) => {
    describe(`${locale} Locale`, () => {
      before(() => {
        browser.url('/#/tests/i18n-tests/default');
        browser.waitForVisible('select', 3000);
        browser.element('select').selectByValue(locale);

        browser.pause(3000);
      });


      Terra.should.matchScreenshot();
    });
  });
});
