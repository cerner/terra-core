Terra.describeViewports('Scroll', ['huge'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-scroll/scroll/default');
  });

  Terra.it.validatesElement('before-click', { selector: '#scroll-test' });

  it('scroll the view', () => {
    browser.click('#scroll');
  });

  Terra.it.matchesScreenshot('after-click', { selector: '#scroll-test' });
});
