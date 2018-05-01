/* global browser, Terra, before */
describe('DocTemplate', () => {
  before(() => browser.setViewportSize(Terra.viewports('huge')[0]));

  describe('Fully filled out doc', () => {
    beforeEach(() => browser.url('/#/raw/tests/doc-template/default-doc-template'));

    Terra.should.matchScreenshot('Readme', { selector: '#DocTemplateContainer > div > div:nth-child(2)' });
    Terra.should.matchScreenshot('Example 1', { selector: '#DocTemplateContainer > div > div:nth-child(5)' });
    Terra.should.matchScreenshot('PropsTable 1', { selector: '#DocTemplateContainer > div > div:nth-child(7)', viewports: [{ width: 1000, height: 1000 }] });
    Terra.should.beAccessible({ viewports: Terra.viewports('huge') });
  });

  describe('Interactivity test', () => {
    beforeEach(() => browser.url('/#/raw/tests/doc-template/default-doc-template'));

    it('Reveals the example\'s code', () => {
      browser.click('[data-terra-example-template-hide]');
      // Reliably causes on hover styling of button to deactivate
      browser.click('h1=Examples');

      // Give time for the animation to complete
      browser.pause(250);

      const screenshots = browser.checkElement('#DocTemplateContainer > div > div:nth-child(5)', { viewports: Terra.viewports('huge') });
      expect(screenshots).to.matchReference('withinTolerance');
    });

    it('Hides the example\'s code again', () => {
      browser.click('[data-terra-example-template-hide]');

      // Ensure the button is revealed so it can be clicked
      browser.pause(100);

      browser.click('[data-terra-example-template-show]');
      // Reliably causes on hover styling of button to deactivate
      browser.click('h1=Examples');

      browser.pause(250);

      const screenshots = browser.checkElement('#DocTemplateContainer > div > div:nth-child(5)', { viewports: Terra.viewports('huge') });
      expect(screenshots).to.matchReference('withinTolerance');
    });
  });
});
