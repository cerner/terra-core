describe('Markdown', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/markdown'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Block Quote', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/markdown'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-markdown-blockquote-color': 'red',
      },
    });
  });
});
