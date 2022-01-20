Terra.describeViewports('Tag', ['tiny'], () => {
  it('should display default tag', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/tag/default-tag');
    Terra.validates.element('default tag');
  });

  it('should display href Tag', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/tag/href-tag');
    Terra.validates.element('href tag');
  });

  it('should display icon and text Tag', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/tag/icon-and-text-tag');
    Terra.validates.element('icon and text tag');
  });

  it('should display icon and long text tag', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/tag/long-text-tag');
    Terra.validates.element('icon and long text tag');
  });

  it('should focus', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/tag/on-click-tag');
    $('#root').click();
    browser.keys('Tab');
    expect($('#on-click').isFocused()).toBe(true);
    Terra.validates.element('focused tag');
  });
});

Terra.describeViewports('Tag', ['tiny', 'medium', 'large'], () => {
  it('displays multiple tags', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/tag/multiple-tags');
    Terra.validates.element('multiple tags');
  });
});
