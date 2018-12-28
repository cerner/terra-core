describe('Scroll', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-scroll/scroll/default');
  });

  Terra.should.beAccessible({ context: '[id=scroll-test]' });
  Terra.should.matchScreenshot('before-click', { selector: '[id=scroll-test]' });

  it('scroll the view', () => {
    browser.click('[id=scroll]');
  });

  Terra.should.matchScreenshot('after-click', { selector: '[id=scroll-test]' });
});
