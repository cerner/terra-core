describe('Toggle', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle/toggle/default-toggle'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('closed');

    it('expands', () => {
      browser.click('#trigger-toggle'); // Open toggle
    });

    Terra.it.matchesScreenshot('opened');
  });

  describe('Opened', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-toggle/toggle/open-toggle');
      browser.moveToObject('#root', 0, 0);
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle/toggle/animated-toggle'));

    it('disables focusable elements when closed', () => {
      expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('hidden');
    });

    it('enables focusable elements when opened', () => {
      browser.click('#trigger-toggle'); // Open toggle
      browser.waitForVisible('#toggle');
      expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('visible');
    });
  });
});
