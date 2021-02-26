Terra.describeViewports('Tag', ['tiny'], () => {
  it('should display default tag', () => {
    browser.url('/raw/tests/terra-tag/tag/default-tag');
    Terra.validates.element('default tag');
  });

  it('should display href Tag', () => {
    browser.url('/raw/tests/terra-tag/tag/href-tag');
    Terra.validates.element('href tag');
  });

  it('should display icon and text Tag', () => {
    browser.url('/raw/tests/terra-tag/tag/icon-and-text-tag');
    Terra.validates.element('icon and text tag');
  });

  it('should display icon and long text tag', () => {
    browser.url('/raw/tests/terra-tag/tag/long-text-tag');
    Terra.validates.element('icon and long text tag');
  });

  it('should focus', () => {
    browser.url('/raw/tests/terra-tag/tag/on-click-tag');
    $('#root').click();
    browser.keys('Tab');
    expect($('#on-click').isFocused()).toBe(true);
    Terra.validates.element('focused tag');
  });

});

Terra.describeViewports('Tag', ['tiny', 'medium', 'large'], () => {
  it('displays multiple tags', () => {
    browser.url('/raw/tests/terra-tag/tag/multiple-tags');
    Terra.validates.element('multiple tags');
  });
});
