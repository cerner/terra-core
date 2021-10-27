Terra.describeViewports('Divider', ['medium'], () => {
  it('displays default Divider', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/divider/default-divider');

    Terra.validates.element('default');
  });

  it('displays Divider with custom text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/divider/divider-with-text');

    Terra.validates.element('custom text');
  });
});
