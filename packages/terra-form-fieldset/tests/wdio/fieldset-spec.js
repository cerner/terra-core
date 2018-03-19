/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Fieldset', () => {
  describe('Populated', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-fieldset/populated-fieldset'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty({
      '--terra-form-fieldset-legend-color': 'yellow',
      '--terra-form-fieldset-legend-font-weight': '100',
      '--terra-form-fieldset-help-text-color': 'green',
      '--terra-form-fieldset-help-text-font-size': '60px',
      '--terra-form-fieldset-help-text-font-weight': '900',
    });
  });
});
