const viewports = Terra.viewports('tiny', 'medium');

describe('Fieldset', () => {
  describe('Populated', () => {
    before(() => browser.url('/#/raw/tests/terra-form-fieldset/form-fieldset/populated-fieldset'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-fieldset-legend-color': 'yellow',
        '--terra-form-fieldset-legend-font-weight': '100',
        '--terra-form-fieldset-help-text-color': 'green',
        '--terra-form-fieldset-help-text-font-size': '60px',
        '--terra-form-fieldset-help-text-font-weight': '900',
      },
    });
  });

  describe('Fieldset Populated with Hidden Legend', () => {
    before(() => browser.url('/#/raw/tests/terra-form-fieldset/form-fieldset/fieldset-with-hidden-legend'));

    Terra.should.validateElement();
  });
});
