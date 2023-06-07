Terra.describeViewports('Content Container', ['medium'], () => {
  it('displays default Content Container', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/content-container/default-content-container');

    Terra.validates.element('content container');
  });

  it('displays Content Container with fill', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/content-container/fill-content-container');

    Terra.validates.element('content container fill');
  });

  it('displays Content Container with scroll', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/content-container/scrollable-content-container');
    Terra.validates.element('before scroll');
    browser.keys(['Tab', 'ArrowDown', 'ArrowDown']);
    Terra.validates.element('after scroll');
  });

  it('displays Content Container with dark color', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/content-container/content-container-dark');
    browser.keys(['Tab']);
    Terra.validates.element('dark content container');
  });

  it('displays Content Container with light color', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/content-container/content-container-light');
    browser.keys(['Tab']);
    Terra.validates.element('light content container');
  });
});
