Terra.describeViewports('RadioField', ['tiny', 'large'], () => {
  it('should display valid RadioField', () => {
    browser.url('/raw/tests/terra-form-radio/form-radio/field/controlled-radio-field');

    Terra.validates.element('valid');
  });

  it('should display optional RadioField', () => {
    browser.url('/raw/tests/terra-form-radio/form-radio/field/optional-radio-field');

    Terra.validates.element('optional');
  });

  it('should display RadioField with hidden legend', () => {
    browser.url('/raw/tests/terra-form-radio/form-radio/field/hidden-legend');

    Terra.validates.element('hidden legend');
  });

  it('should display RadioField with long text legend', () => {
    browser.url('/raw/tests/terra-form-radio/form-radio/field/long-text-legend');

    Terra.validates.element('long text legend');
  });
});

Terra.describeViewports('RadioField Interactions', ['tiny'], () => {
  it('should display RadioField interactions - valid state', () => {
    browser.url('/raw/tests/terra-form-radio/form-radio/field/controlled-radio-field');
    $('#testing-radio-field').waitForDisplayed();
    $('[for="website-dept"]').click();
    $('[for="ux-dept"]').click();
    $('[for="website-dept"]').click();
    $('[for="ux-dept"]').click();

    Terra.validates.element('valid state');
  });

  it('should display RadioField interactions - valid state with hideRequired', () => {
    browser.url('/raw/tests/terra-form-radio/form-radio/field/hide-required-invalid-radio-field');
    $('#testing-radio-field').waitForDisplayed();
    $('[for="website-dept"]').click();
    $('[for="ux-dept"]').click();

    Terra.validates.element('valid state with hideRequired');
  });

  it('should display RadioField Interactions - invalid state with hideRequired', () => {
    browser.url('/raw/tests/terra-form-radio/form-radio/field/hide-required-invalid-radio-field');
    $('#testing-radio-field').waitForDisplayed();
    $('[for="website-dept"]').click();
    $('[for="ux-dept"]').click();
    $('[for="website-dept"]').click();
    $('[for="ux-dept"]').click();

    Terra.validates.element('invalid state with hideRequired');
  });
});
