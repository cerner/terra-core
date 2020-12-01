// Add Portuguese-Guinea-Bissau, Zulu & Zulu-South African locales as test locales (supported by intl)
const testLocales = ['en', 'en-GB', 'pt', 'pt-GW', 'zu', 'zu-ZA'];

Terra.describeViewports('I18n', ['medium'], () => {
  it('should display tests initial load', () => {
    browser.url('/raw/tests/terra-i-18-n/i-18-n/default-i-18-n');
    browser.waitForVisible('select');

    Terra.validates.element('initial load');
  });

  testLocales.forEach((locale) => {
    it(`should display message in ${locale}`, () => {
      browser.waitForVisible('select');
      browser.element('select').selectByValue(locale);

      Terra.validates.screenshot(`${locale} locale`);
    });
  });
});
