Terra.describeViewports('Content Container', ['medium'], () => {
  it('displays default Content Container', () => {
    browser.url('/raw/tests/terra-content-container/content-container/default-content-container');

    Terra.validates.element('content container');
  });

  it('displays Content Container with fill', () => {
    browser.url('/raw/tests/terra-content-container/content-container/fill-content-container');

    Terra.validates.element('content container fill');
  });
});
