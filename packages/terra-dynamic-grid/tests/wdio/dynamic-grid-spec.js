Terra.describeViewports('Dynamic Grid', ['tiny', 'huge'], () => {
  it('displays default Dynamic Grid', () => {
    browser.url('/#/raw/tests/terra-dynamic-grid/dynamic-grid/default-dynamic-grid');

    Terra.validates.element('default');
  });

  it('displays Dynamic Grid with large template', () => {
    browser.url('/#/raw/tests/terra-dynamic-grid/dynamic-grid/large-dynamic-grid');

    Terra.validates.element('large template');
  });
});
