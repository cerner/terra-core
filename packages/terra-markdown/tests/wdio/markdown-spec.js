describe('Markdown', () => {
  before(() => browser.setViewportSize(Terra.viewports('large')[0]));
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/markdown'));

    Terra.should.validateElement({ selector: '#root' });
  });

  describe('Block Quote', () => {
    before(() => browser.url('/#/raw/tests/terra-markdown/markdown/markdown'));

    Terra.should.validateElement({ selector: '#root' });
    Terra.should.themeCombinationOfCustomProperties({
      selector: '#root',
      testName: 'themed',
      properties: {
        '--terra-markdown-blockquote-color': 'red',
      },
    });
  });
});
