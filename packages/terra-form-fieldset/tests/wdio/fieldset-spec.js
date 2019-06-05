const viewports = Terra.viewports('tiny', 'medium');

describe('Fieldset', () => {
  describe('Populated', () => {
    before(() => browser.url('/#/raw/tests/terra-form-fieldset/form-fieldset/populated-fieldset'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Fieldset Populated with Hidden Legend', () => {
    before(() => browser.url('/#/raw/tests/terra-form-fieldset/form-fieldset/fieldset-with-hidden-legend'));

    Terra.it.validatesElement();
  });
});
