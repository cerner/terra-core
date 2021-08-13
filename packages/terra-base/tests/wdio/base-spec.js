Terra.describeViewports('Base', ['tiny'], () => {
  describe('Switching Locales', () => {
    before(() => browser.url('/#/raw/tests/terra-base/base/switch-locale-base'));
    it('Displays a default en locale message', () => {
      expect($('#message').getText()).toEqual('en');
    });

    it('Displays a customized en-US locale message', () => {
      $('#switch').click();
      expect($('#message').getText()).toEqual('en-US');
    });
  });

  describe('No Translations- Fallback to En', () => {
    it('Displays a placeholder element', () => {
      browser.url('/#/raw/tests/terra-base/base/no-translations-loaded-base');
      expect($('div')).not.toHaveTextContaining('No Translations');
    });

    it('Displays a placeholder string', () => {
      browser.url('/#/raw/tests/terra-base/base/no-translations-loaded-string-base');
      expect($('div')).not.toHaveTextContaining('No Translations String');
    });
  });
});
