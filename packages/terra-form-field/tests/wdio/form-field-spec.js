describe('Form-field', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/default-field'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Label', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Label Optional', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-optional'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Label Required', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-required'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Error Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-error-text'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Help Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-help-text'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Label Required Error Help Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-required-error-help-text'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Hidden Label', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-hidden-label'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Text Wrap', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-text-wrap'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Inline', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-inline'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });
});
