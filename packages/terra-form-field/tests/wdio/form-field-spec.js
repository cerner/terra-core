/* global browser, Terra, before */

describe('Form-field', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/default-field'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-margin-bottom': '15px',
      },
    });
  });

  describe('Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-label'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
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
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-label-optional'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-label-optional-font-style': 'bold',
        '--terra-form-field-label-optional-padding-left': '10px',
      },
    });
  });

  describe('Label Required', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-label-required'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-label-required-color': 'green',
        '--terra-form-field-label-required-padding-right': '10px',
      },
    });
  });

  describe('Error Text', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-error-text'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
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
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-help-text'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
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
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-label-required-error-help-text'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-hidden-label'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Text Wrap', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-text-wrap'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Inline', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-inline'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
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
