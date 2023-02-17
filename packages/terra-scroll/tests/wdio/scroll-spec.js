Terra.describeViewports('Scroll', ['huge'], () => {
  before(() => {
    browser.url('/raw/tests/cerner-terra-core-docs/scroll/default');
  });

  it('should display Scroll before click', () => {
    Terra.validates.element('before-click', { selector: '#scroll-test' });
  });

  it('scroll the view', () => {
    $('#scroll').click();
  });

  it('should display Scroll after click', () => {
    Terra.validates.element('after-click', { selector: '#scroll-test' });
  });
});
