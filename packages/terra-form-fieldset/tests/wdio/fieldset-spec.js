/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Fieldset', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/form-tests/fieldset/default'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Populated', () => {
    beforeEach(() => browser.url('/#/tests/form-tests/field/populated'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
