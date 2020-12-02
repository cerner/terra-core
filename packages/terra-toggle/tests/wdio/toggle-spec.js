Terra.describeViewports('Toggle', ['medium'], () => {
  describe('Default', () => {
    it('displays a closed toggle', () => {
      browser.url('/raw/tests/terra-toggle/toggle/default-toggle');
      Terra.validates.element('closed');
    });

    it('expands', () => {
      browser.click('#trigger-toggle'); // Open toggle
      Terra.validates.element('expanded');
    });
  });

  it('displays an opened toggle', () => {
    browser.url('/raw/tests/terra-toggle/toggle/open-toggle');
    browser.moveToObject('#root', 0, 0);
    Terra.validates.element('opened');
  });

  describe('Animated', () => {
    it('disables focusable elements when closed', () => {
      browser.url('/raw/tests/terra-toggle/toggle/animated-toggle');
      expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('hidden');
    });

    it('enables focusable elements when opened', () => {
      browser.click('#trigger-toggle'); // Open toggle
      browser.waitForVisible('#toggle');
      expect(browser.getCssProperty('#toggle', 'visibility').value).to.equal('visible');
    });
  });
});
