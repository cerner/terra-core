Terra.describeViewports('Fieldset', ['tiny', 'medium'], () => {
  it('should display populated Fieldset', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-fieldset/populated-fieldset');

    Terra.validates.element('populated');
  });

  it('should display populated Fieldset with hidden legend', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-fieldset/fieldset-with-hidden-legend');

    Terra.validates.element('populated Fieldset with hidden legend');
  });

  it('should display populated Fieldset without legend and helptext', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-fieldset/fieldset-without-legend-and-helptext');

    Terra.validates.element('populated Fieldset without legend and helptext');
  });
});
