/* global $, before, browser */
describe('Base', () => {
  describe('Switching Locales', () => {
    before(() => browser.url('/#/tests/base-tests/switch'));
    it('Displays a default en locale message', () => {
      expect(browser.getText('#message')).to.equal('en');
    });

    it('Displays a customized en-US locale message', () => {
      browser.click('button');
      expect(browser.getText('#message')).to.equal('en-US');
    });
  });

  // NOTE: This test is designed to assume that tests won't fail on an error.  If it starts failing,
  // we can remove it and either deem that this scenario is not needed in night watch or find a
  // better solution.
  describe('No Translations Placeholder', () => {
    it('Displays a placeholder element', () => {
      browser.url('/#/tests/base-tests/no-translations-loaded');
      expect($('div').getText()).to.contain('No Translations');
    });

    it('Displays a placeholder string', () => {
      browser.url('/#/tests/base-tests/no-translations-loaded-string');
      expect($('div').getText()).to.contain('No Translations String');
    });
  });
});
