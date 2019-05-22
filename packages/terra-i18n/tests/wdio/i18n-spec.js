// Add Portuguese-Guinea-Bissau, Zulu & Zulu-South African locales as test locales (supported by intl)
const testLocales = ['en', 'en-GB', 'pt', 'pt-GW', 'zu', 'zu-ZA'];

describe('I18n', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  describe('Initial Load', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-i-18-n/i-18-n/default-i-18-n');
      browser.waitForVisible('select');
    });

    Terra.should.matchScreenshot();
  });

  testLocales.forEach((locale) => {
    describe(`${locale} Locale`, () => {
      before(() => {
        browser.url('/#/raw/tests/terra-i-18-n/i-18-n/default-i-18-n');
        browser.waitForVisible('select');
        browser.element('select').selectByValue(locale);
      });

      Terra.should.matchScreenshot();
    });
  });
});
