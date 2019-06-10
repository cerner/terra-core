describe('Scroll', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-scroll/scroll/default');
  });

  Terra.it.isAccessible();
  Terra.it.matchesScreenshot('before-click', { selector: '#scroll-test' });

  it('scroll the view', () => {
    browser.click('#scroll');
  });

  Terra.it.matchesScreenshot('after-click', { selector: '#scroll-test' });
});
