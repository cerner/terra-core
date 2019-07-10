Terra.describeViewports('Form-field', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/default-field'));

    Terra.it.validatesElement();
  });

  describe('Label', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label'));

    Terra.it.validatesElement();
  });

  describe('Label Optional', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-optional'));

    Terra.it.validatesElement();
  });

  describe('Label Required', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-required'));

    Terra.it.validatesElement();
  });

  describe('Error Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-error-text'));

    Terra.it.validatesElement();
  });

  describe('Help Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-help-text'));

    Terra.it.validatesElement();
  });

  describe('Label Required Error Help Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-required-error-help-text'));

    Terra.it.validatesElement();
  });

  describe('Hidden Label', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-hidden-label'));

    Terra.it.validatesElement();
  });

  describe('Text Wrap', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-text-wrap'));

    Terra.it.validatesElement();
  });

  describe('Inline', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-inline'));

    Terra.it.validatesElement();
  });
});
