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

  describe('Content', () => {
    before(() => browser.url('/#/tests/base-tests/array-of-children'));
    it('Renders children', () => {
      expect(browser.getText('#one')).to.equal('One');
      expect(browser.getText('#two')).to.equal('Two');
    });
  });

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
