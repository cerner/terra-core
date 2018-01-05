/* global browser, Terra, before */

describe('Radio', () => {
  describe('Default Radio', () => {
    before(() => browser.url('/#/tests/form-radio-tests/default'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeEachCustomProperty({
      '--terra-form-radio-container-margin-right': '2rem',
      '--terra-form-radio-container-margin-top': '0.625rem',
      '--terra-form-radio-font-size, 1rem': '1rem',
      '--terra-form-radio-line-height': '1.42',
      '--terra-form-radio-native-input-margin-left': '0.071rem',
      '--terra-form-radio-native-input-margin-right': '0.143rem',
      '--terra-form-radio-label-text-margin-left': '1.4em',
    });
  });

  describe('Disabled Radio', () => {
    before(() => {
      browser.url('/#//tests/form-radio-tests/disabled');
      // browser.click('.disabled');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeEachCustomProperty({
      '-terra-form-radio-disabled-font-color': '#9b9fa1',
    });
  });

  describe('Hidden Label Radio', () => {
    before(() => browser.url('/#/tests/form-radio-tests/hidden'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Populated Radio', () => {
    before(() => browser.url('/#/tests/form-radio-tests/populated'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Long Text Radio', () => {
    before(() => browser.url('/#/tests/form-radio-tests/longText'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Multiple Radios', () => {
    before(() => browser.url('/#/tests/form-radio-tests/multiple'));
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeEachCustomProperty({
      '--terra-form-radio-container-margin-right': '2rem',
      '--terra-form-radio-container-margin-top': '0.625rem',
      '--terra-form-radio-font-size': '1rem',
      '--terra-form-radio-line-height': '1.42',
      '--terra-form-radio-native-input-margin-left': '0.071rem',
      '--terra-form-radio-native-input-margin-right': '0.143rem',
      '--terra-form-radio-label-text-margin-left': '1.4em',
    });
  });
});
