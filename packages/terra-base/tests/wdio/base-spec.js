/* global $ */

Terra.describeViewports('Base', ['tiny'], () => {
  describe('Switching Locales', () => {
    before(() => browser.url('/#/raw/tests/terra-base/base/switch-locale-base'));
    it('Displays a default en locale message', () => {
      expect(browser.getText('#message')).to.equal('en');
    });

    it('Displays a customized en-US locale message', () => {
      browser.click('#switch');
      expect(browser.getText('#message')).to.equal('en-US');
    });
  });

  describe('No Translations- Fallback to En', () => {
    it('Displays a placeholder element', () => {
      browser.url('/#/raw/tests/terra-base/base/no-translations-loaded-base');
      expect($('div').getText()).to.not.contain('No Translations');
    });

    it('Displays a placeholder string', () => {
      browser.url('/#/raw/tests/terra-base/base/no-translations-loaded-string-base');
      expect($('div').getText()).to.not.contain('No Translations String');
    });
  });
});
