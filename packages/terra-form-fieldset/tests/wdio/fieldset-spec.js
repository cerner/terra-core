Terra.describeViewports('Fieldset', ['tiny', 'medium'], () => {
  it('should display populated Fieldset', () => {
    browser.url('/raw/tests/terra-form-fieldset/form-fieldset/populated-fieldset');

    Terra.validates.element('populated');
  });

  it('should display populated Fieldset with hidden legend', () => {
    browser.url('/raw/tests/terra-form-fieldset/form-fieldset/fieldset-with-hidden-legend');

    Terra.validates.element('populated Fieldset with hidden legend');
  });
});
