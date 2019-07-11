Terra.describeViewports('RadioField', ['tiny', 'large'], () => {
  describe('RadioField Valid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/controlled-radio-field');
    });

    Terra.it.validatesElement();
  });

  describe('RadioField Optional', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/optional-radio-field');
    });

    Terra.it.validatesElement();
  });

  describe('RadioField Hidden Legend', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/hidden-legend');
    });

    Terra.it.validatesElement();
  });
});

Terra.describeViewports('RadioField Interactions', ['tiny'], () => {
  describe('RadioField Interactions - Valid State', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/controlled-radio-field');
      browser.waitForVisible('#testing-radio-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.it.validatesElement();
  });

  describe('RadioField Interactions - Valid State with hideRequired', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/hide-required-invalid-radio-field');
      browser.waitForVisible('#testing-radio-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.it.validatesElement();
  });

  describe('RadioField Interactions - Invalid State with hideRequired', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/hide-required-invalid-radio-field');
      browser.waitForVisible('#testing-radio-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.it.validatesElement();
  });
});
