describe('Scroll', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-scroll/scroll/default');
  });

  Terra.should.beAccessible();
  Terra.should.matchScreenshot('before-click', { selector: '#scroll-test' });

  it('scroll the view', () => {
    browser.click('#scroll');
  });

  Terra.should.matchScreenshot('after-click', { selector: '#scroll-test' });
});
