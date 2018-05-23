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
        '--terra-form-field-margin-bottom': '5px',
      },
    });
  });

  // describe('Label', () => {
  //   beforeEach(() => browser.url('/#/raw/tests/form-field/field-label'));
  //
  //   Terra.should.beAccessible();
  //   Terra.should.matchScreenshot();
  // });
  //
  // describe('Label Optional', () => {
  //   beforeEach(() => browser.url('/#/raw/tests/form-field/field-label-optional'));
  //
  //   Terra.should.beAccessible();
  //   Terra.should.matchScreenshot();
  // });

  // describe('Label Required', () => {
  //   beforeEach(() => browser.url('/#/raw/tests/form-field/field-label-required'));
  //
  //   Terra.should.beAccessible();
  //   Terra.should.matchScreenshot();
  // });

  // describe('Error Text', () => {
  //   beforeEach(() => browser.url('/#/raw/tests/form-field/field-error-text'));
  //
  //   Terra.should.beAccessible();
  //   Terra.should.matchScreenshot();
  // });
  //
  describe('Help Text', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-help-text'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
  //
  // describe('Label Required Error Help Text', () => {
  //   beforeEach(() => browser.url('/#/raw/tests/form-field/field-label-required-error-help-text'));
  //
  //   Terra.should.beAccessible();
  //   Terra.should.matchScreenshot();
  // });
  //
  // describe('Hidden Label', () => {
  //   beforeEach(() => browser.url('/#/raw/tests/form-field/field-hidden-label'));
  //
  //   Terra.should.beAccessible();
  //   Terra.should.matchScreenshot();
  // });
  //
  // describe('Text Wrap', () => {
  //   beforeEach(() => browser.url('/#/raw/tests/form-field/field-text-wrap'));
  //
  //   Terra.should.beAccessible();
  //   Terra.should.matchScreenshot();
  // });
  //
  describe('Inline', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-field/field-inline'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-field-inline-margin-right': '5px',
      },
    });
  });
  // });
});
