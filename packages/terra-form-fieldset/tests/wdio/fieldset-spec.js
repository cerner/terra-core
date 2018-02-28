/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Fieldset', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/form-fieldset-tests/fieldset/default'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Populated', () => {
    beforeEach(() => browser.url('/#/tests/form-fieldset-tests/fieldset/populated'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
    Terra.should.themeEachCustomProperty('#root', {
      '--terra-form-fieldset-legend-color': 'yellow',
      '--terra-form-fieldset-legend-font-weight': '100',
      '--terra-form-fieldset-error-color': 'green',
    });
  });
});
