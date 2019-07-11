Terra.describeViewports('Fieldset', ['tiny', 'medium'], () => {
  describe('Populated', () => {
    before(() => browser.url('/#/raw/tests/terra-form-fieldset/form-fieldset/populated-fieldset'));

    Terra.it.validatesElement();
  });

  describe('Fieldset Populated with Hidden Legend', () => {
    before(() => browser.url('/#/raw/tests/terra-form-fieldset/form-fieldset/fieldset-with-hidden-legend'));

    Terra.it.validatesElement();
  });
});
