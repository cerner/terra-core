Terra.describeViewports('Form Field', ['medium'], () => {
  it('should display default Form Field', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/default-field');

    Terra.validates.element('default');
  });

  it('should display Form Field with label', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-label');

    Terra.validates.element('label');
  });

  it('should display Form Field with optional label', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-label-optional');

    Terra.validates.element('optional label');
  });

  it('should display Form Field with required label ', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-label-required');

    Terra.validates.element('required label');
  });

  it('should display Form Field with error text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-error-text');

    Terra.validates.element('error text');
  });

  it('should display Form Field with help text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-help-text');

    Terra.validates.element('help text');
  });

  it('should display Form Field with label required error help text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-label-required-error-help-text');

    Terra.validates.element('label required error help text');
  });

  it('should display Form Field with hidden label', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-hidden-label');

    Terra.validates.element('hidden label');
  });

  it('should display Form Field with text wrap', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-text-wrap');

    Terra.validates.element('text wrap');
  });

  it('should display Form Field with long word wrap', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-long-word-wrap');

    Terra.validates.element('long word wrap');
  });

  it('should display inline Form Field', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-field/field-inline');

    Terra.validates.element('inline');
  });
});
