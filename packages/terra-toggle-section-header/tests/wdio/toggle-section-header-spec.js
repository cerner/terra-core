describe('ToggleSectionHeader', () => {
  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-toggle-section-header/toggle-section-header/default-toggle-section-header');
      browser.moveToObject('#root', 0, 900); // move to prevent hover styles
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Open', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-toggle-section-header/toggle-section-header/open-toggle-section-header');
      browser.moveToObject('#root', 0, 900); // move to prevent hover styles
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Transparent', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-section-header/toggle-section-header/transparent-toggle-section-header'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
