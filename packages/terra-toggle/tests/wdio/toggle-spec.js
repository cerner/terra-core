describe('Toggle', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle/toggle/default-toggle'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('closed');

    it('expands', () => {
      browser.click('[id=trigger-toggle]'); // Open toggle
    });

    Terra.should.matchScreenshot('opened');
  });

  describe('Opened', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle/toggle/open-toggle'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle/toggle/animated-toggle'));

    it('disables focusable elements when closed', () => {
      expect(browser.getCssProperty('[id=toggle]', 'visibility').value).to.equal('hidden');
    });

    it('enables focusable elements when opened', () => {
      browser.click('[id=trigger-toggle]'); // Open toggle
      browser.waitForVisible('[id=toggle]');
      expect(browser.getCssProperty('[id=toggle]', 'visibility').value).to.equal('visible');
    });
  });
});
