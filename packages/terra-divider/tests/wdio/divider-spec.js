Terra.describeViewports('Divider', ['medium'], () => {
  it('displays default Divider', () => {
    browser.url('/raw/tests/terra-divider/divider/default-divider');

    Terra.validates.element('default');
  });

  it('displays Divider with custom text', () => {
    browser.url('/raw/tests/terra-divider/divider/divider-with-text');

    Terra.validates.element('custom text');
  });
});
