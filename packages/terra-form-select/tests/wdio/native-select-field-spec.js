Terra.describeViewports('Native Select Field', ['tiny'], () => {
  it('should display default Field', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/default-field');

    Terra.validates.element('default');
  });

  it('should display incomplete Field', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/incomplete-field');

    Terra.validates.element('incomplete');
  });

  it('should display required Field', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/required-field');

    Terra.validates.element('required');
  });

  it('should display Field without placeholder', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/default-field-without-placeholder');

    Terra.validates.element('default-without-placeholder');
  });
});
