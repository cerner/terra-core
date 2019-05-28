describe('Form-field', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/default-field'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-margin-bottom': '15px',
      },
    });
  });

  describe('Label', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-label-font-size': '18px',
        '--terra-form-field-label-margin-bottom': '10px',
        '--terra-form-field-label-color': 'blue',
        '--terra-form-field-label-font-weight': 'bolder',
      },
    });
  });

  describe('Label Optional', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-optional'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-label-optional-font-style': 'bold',
        '--terra-form-field-label-optional-padding-left': '10px',
      },
    });
  });

  describe('Label Required', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-label-required'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-label-required-color': 'green',
        '--terra-form-field-label-required-padding-right': '10px',
      },
    });
  });

  describe('Error Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-error-text'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-error-text-color': 'blue',
        '--terra-form-field-error-text-font-size': '15px',
        '--terra-form-field-error-text-font-weight': 'bolder',
        '--terra-form-field-error-text-margin-top': '15px',
      },
    });
  });

  describe('Help Text', () => {
    before(() => browser.url('/#/raw/tests/terra-form-field/form-field/field-help-text'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-help-text-color': 'red',
        '--terra-form-field-help-text-font-size': '10px',
        '--terra-form-field-help-text-font-weight': 'lighter',
        '--terra-form-field-help-text-margin-top': '10px',
      },
    });
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
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-inline-margin-right': '5px',
        '--terra-form-field-label-error-icon-display': 'block',
        '--terra-form-field-label-error-icon-padding-right': '10px',
      },
    });
  });
});
