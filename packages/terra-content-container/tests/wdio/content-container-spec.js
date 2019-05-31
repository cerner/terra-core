describe('Content Container', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-content-container/content-container/default-content-container'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-content-container/content-container/fill-content-container'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
