const viewports = Terra.viewports('medium');

describe('Signature', () => {
  describe('Themed Drawing Lines', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-signature/signature/signature-default');
      browser.waitForVisible('#drawline');
      // Theme variables need to be set before drawing on canvas for theme test
      browser.execute('document.documentElement.style.setProperty("--terra-signature-background-color", "#a7dc9e")');
      browser.execute('document.documentElement.style.setProperty("--terra-signature-line-color", "#8b0a0a")');
      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(0);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(0);
    });

    Terra.it.matchesScreenshot({ viewports });
  });
});
