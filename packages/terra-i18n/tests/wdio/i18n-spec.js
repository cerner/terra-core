// Add Portuguese-Guinea-Bissau, Zulu & Zulu-South African locales as test locales (supported by intl)
const testLocales = ['en', 'en-GB', 'pt', 'pt-GW', 'zu', 'zu-ZA'];

Terra.describeViewports('I18n', ['medium'], () => {
  it('should display tests initial load', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/i-18-n/default-i-18-n');
    $('select').waitForDisplayed();

    Terra.validates.element('initial load');
  });

  testLocales.forEach((locale) => {
    it(`should display message in ${locale}`, () => {
      $('select').waitForDisplayed();
      $('select').selectByAttribute('value', locale);

      Terra.validates.element(`${locale} locale`);
    });
  });
});
