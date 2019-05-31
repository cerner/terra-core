describe('DocTemplate', () => {
  before(() => browser.setViewportSize(Terra.viewports('huge')[0]));

  describe('Fully filled out doc', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/default-doc-template'));

    Terra.it.matchesScreenshot('Readme', { selector: '#DocTemplateContainer > div:first-child > div:first-child > div:nth-child(2)' });
    Terra.it.matchesScreenshot('Example 1', { selector: '#DocTemplateContainer > div > div:nth-child(3)' });
    Terra.it.matchesScreenshot('PropsTable 1', { selector: '#DocTemplateContainer > div > div:nth-child(5) > div:first-child', viewports: [{ width: 1000, height: 1000 }] });
    Terra.it.isAccessible({ viewports: Terra.viewports('huge') });
  });

  describe('Interactivity test', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/default-doc-template'));

    it('Reveals the examples code', () => {
      browser.click('button');
      // Reliably causes on hover styling of button to deactivate
      browser.click('h1=Examples');

      // Give time for the animation to complete
      browser.pause(250);

      const screenshots = browser.checkElement('#DocTemplateContainer > div > div:nth-child(3)', { viewports: Terra.viewports('huge') });
      expect(screenshots).to.matchReference('withinTolerance');
    });

    it('Hides the examples code again', () => {
      browser.click('button');
      // Reliably causes on hover styling of button to deactivate
      browser.click('h1=Examples');

      browser.pause(250);

      const screenshots = browser.checkElement('#DocTemplateContainer > div > div:nth-child(3)', { viewports: Terra.viewports('huge') });
      expect(screenshots).to.matchReference('withinTolerance');
    });
  });
});
