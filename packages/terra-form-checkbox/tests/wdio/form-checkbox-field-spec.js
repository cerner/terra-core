Terra.describeViewports('CheckboxField', ['tiny', 'large'], () => {
  it('should display controlled CheckboxField', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/controlled-checkbox-field');

    Terra.validates.element('controlled');
  });

  it('should display optional CheckboxField', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/optional-checkbox-field');

    Terra.validates.element('optional');
  });

  it('should display CheckboxField with hidden legend', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/hidden-legend');

    Terra.validates.element('hidden legend');
  });

  it('should display CheckboxField with long text legend', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/long-text-legend');

    Terra.validates.element('long text legend');
  });
});

Terra.describeViewports('CheckboxField', ['tiny'], () => {
  it('should display CheckboxField interactions valid state', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/controlled-checkbox-field');
    browser.waitForVisible('#testing-checkbox-field');
    browser.click('[for="website-dept"]');
    browser.click('[for="ux-dept"]');

    Terra.validates.element('interactions with valid state');
  });

  it('should display CheckboxField interactions invalid state', () => {
    browser.click('[for="website-dept"]');
    browser.click('[for="ux-dept"]');

    Terra.validates.element('interactions with invalid state');
  });

  it('should display CheckboxField interactions valid State with hideRequired', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox-field/hide-required-invalid-checkbox-field');
    browser.waitForVisible('#testing-checkbox-field');
    browser.click('[for="website-dept"]');
    browser.click('[for="ux-dept"]');

    Terra.validates.element('interactions valid State with hideRequired');
  });

  it('should display CheckboxField interactions invalid state with hideRequired', () => {
    browser.waitForVisible('#testing-checkbox-field');
    browser.click('[for="website-dept"]');
    browser.click('[for="ux-dept"]');

    Terra.validates.element('interactions invalid state with hideRequired');
  });
});
