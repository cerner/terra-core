const viewports = Terra.viewports('tiny', 'large');

describe('CheckboxField', () => {
  describe('CheckboxField Valid', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/controlled-checkbox-field');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('CheckboxField Interactions - Valid State', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/controlled-checkbox-field');
      browser.waitForVisible('#testing-checkbox-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.it.matchesScreenshot({ viewports: [viewports[0]] });
  });

  describe('CheckboxField Interactions - Invalid State', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/controlled-checkbox-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.it.matchesScreenshot({ viewports: [viewports[0]] });
  });

  describe('CheckboxField Interactions - Valid State with hideRequired', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/hide-required-invalid-checkbox-field');
      browser.waitForVisible('#testing-checkbox-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.it.matchesScreenshot({ viewports: [viewports[0]] });
  });

  describe('CheckboxField Interactions - Invalid State with hideRequired', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/hide-required-invalid-checkbox-field');
      browser.waitForVisible('#testing-checkbox-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.it.matchesScreenshot({ viewports: [viewports[0]] });
  });

  describe('CheckboxField Optional', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/optional-checkbox-field');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('CheckboxField Hidden Legend', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/hidden-legend');
    });

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });
});
