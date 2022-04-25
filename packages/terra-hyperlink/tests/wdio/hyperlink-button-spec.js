Terra.describeViewports('Hyperlink Button', ['tiny'], () => {
  it('should display Hyperlink Button Variants', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/hyperlink-button/hyperlink-button-variants');

    Terra.validates.element('variants');
  });

  it('should display disabled Hyperlink button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/hyperlink-button/private-disabled-hyperlink-button');

    Terra.validates.element('disabled');
  });

  it('should display hyperlink button states', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/hyperlink-button/states-hyperlink-button');

    Terra.validates.element('states');
  });

  it('should display Hyperlink button with hidden underline', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/hyperlink/hyperlink-button/private-underline-hidden-hyperlink-button');

    Terra.validates.element('hidden underline');
  });
});
