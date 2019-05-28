describe('Placeholder', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/default-placeholder'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });

  describe('Light Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/light-placeholder'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();
  });
});
