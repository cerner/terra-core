describe('Placeholder', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/default-placeholder'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Light Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/light-placeholder'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
