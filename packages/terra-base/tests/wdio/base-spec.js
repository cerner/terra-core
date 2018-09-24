/* global $ */

describe('Base', () => {
  before(() => browser.setViewportSize(Terra.viewports('tiny')[0]));

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

  describe('Background color', () => {
    before(() => browser.url('/#/raw/tests/terra-base/base/default-base'));

    Terra.should.themeEachCustomProperty(
      '#root',
      {
        '--terra-base-background-color': 'red',
      },
    );
  });

  describe('Background image', () => {
    before(() => browser.url('/#/raw/tests/terra-base/base/default-base'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'Background Image',
      properties: {
        '--terra-base-background-image': 'url("https://github.com/cerner/terra-core/raw/master/terra.png")',
        '--terra-base-background-repeat': 'no-repeat',
        '--terra-base-background-size': '100%',
        '--terra-base-background-position': 'top 70px left 45px',
        '--terra-base-background-attachment': 'fixed',
      },
      selector: '#root',
    });

    it('should scroll to the bottom', () => {
      browser.moveToObject('#bottom');
    });

    Terra.should.matchScreenshot('scrolled down', { selector: '#bottom-section' });
  });
});
