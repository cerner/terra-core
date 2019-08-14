Terra.describeViewports('DocTemplate', ['large'], () => {
  describe('Fully filled out doc', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/default-doc-template'));
    browser.pause(50);
    Terra.it.validatesElement('Readme', { selector: '#DocTemplateContainer > div:first-child > div:first-child > div:nth-child(2)' });
    Terra.it.matchesScreenshot('Example 1', { selector: '#DocTemplateContainer > div > div:nth-child(3)' });
    Terra.it.matchesScreenshot('PropsTable 1', { selector: '#DocTemplateContainer > div > div:nth-child(5) > div:first-child', viewports: [{ width: 1000, height: 1000 }] });
  });

  describe('Interactivity test', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/default-doc-template'));
    browser.pause(50);
    it('Reveals the examples code', () => {
      browser.click('[class*=code-toggle]');
      // Reliably causes on hover styling of button to deactivate
      browser.click('h1=Examples');

      Terra.validates.screenshot('Reveals the examples code', { selector: '#DocTemplateContainer > div > div:nth-child(3)' });
    });

    it('Hides the examples code again', () => {
      browser.click('[class*=code-toggle]');
      // Reliably causes on hover styling of button to deactivate
      browser.click('h1=Examples');

      Terra.validates.screenshot('Hides the examples code again', { selector: '#DocTemplateContainer > div > div:nth-child(3)' });
    });
  });
});
