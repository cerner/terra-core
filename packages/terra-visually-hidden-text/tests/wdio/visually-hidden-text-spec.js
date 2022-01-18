Terra.describeViewports('VisuallyHiddenText', ['tiny', 'medium', 'large'], () => {
  it('displays a Default visually hidden text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/visually-hidden-text/default-visually-hidden-text');
    Terra.validates.element('default');
  });

  it('displays a Non Null visually hidden text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/visually-hidden-text/non-null-visually-hidden-text');
    Terra.validates.element('non null');
  });
});
