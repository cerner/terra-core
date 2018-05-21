/* global before, browser, Terra */

describe('Checkbox', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  const themingProperties = {
    '--terra-form-checkbox-font-color': '#111619',
    '--terra-form-checkbox-container-margin-bottom': '0.625rem',
    '--terra-form-checkbox-container-margin-right': '1.071rem',
    '--terra-form-checkbox-container-margin-top': '0',
    '--terra-form-checkbox-container-margin-left': '1.071rem',
    '--terra-form-checkbox-font-size': '1.286rem',
    '--terra-form-checkbox-line-height': '1.4',
    '--terra-form-checkbox-padding-left': '1.2rem',
    '--terra-form-checkbox-native-input-clip': 'rect(0,0,0,0)',
    '--terra-form-checkbox-native-input-cursor': 'default',
    '--terra-form-checkbox-native-input-font-size': '0',
    '--terra-form-checkbox-native-input-height': '1px',
    '--terra-form-checkbox-native-input-margin-left': '-1px',
    '--terra-form-checkbox-native-input-margin-right': '-1px',
    '--terra-form-checkbox-native-input-overflow': 'hidden',
    '--terra-form-checkbox-native-input-padding': '0',
    '--terra-form-checkbox-native-input-width': '1.4px',
    '--terra-form-checkbox-label-text-margin-left': '0.643rem',
    '--terra-form-checkbox-background-color': '#fff',
    '--terra-form-checkbox-background-image': 'none',
    '--terra-form-checkbox-border': '1px solid #cfd0d1',
    '--terra-form-checkbox-border-radius': '0.2714rem',
    '--terra-form-checkbox-height': '1.286rem',
    '--terra-form-checkbox-margin-top': '0.2857rem',
    '--terra-form-checkbox-width': '1.286rem',
    '--terra-form-checkbox-symbol': 'x',
    '--terra-form-checkbox-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    '--terra-form-checkbox-disabled-font-opacity': '0.5',
  };

  const hoverThemingProperties = {
    '--terra-form-checkbox-hover-border-color': '#77b1fd',
    '--terra-form-checkbox-hover-border-width': '2px',
  };

  const focusThemingProperties = {
    '--terra-form-checkbox-focus-border-color': '#77b1fd',
    '--terra-form-checkbox-focus-border-width': '2px',
  };

  const focusRingThemingProperties = {
    '--terra-form-checkbox-focus-ring-background-color': 'orange',
    '--terra-form-checkbox-focus-ring-height': '10px',
    '--terra-form-checkbox-focus-ring-left': '2px',
    '--terra-form-checkbox-focus-ring-top': '2px',
    '--terra-form-checkbox-focus-ring-width': '10px',
  };

  const checkedThemingProperties = {
    '--terra-form-checkbox-checked-background-color': '#3a67a4',
    '--terra-form-checkbox-checked-border': '2px solid #3a67a4',
    '--terra-form-checkbox-checked-border-radius': '0.2714rem',
    '--terra-form-checkbox-checked-height': '1.286rem',
    '--terra-form-checkbox-checked-line-height': '0.9',
    '--terra-form-checkbox-checked-symbol-padding-left': '0',
    '--terra-form-checkbox-checked-symbol-padding-right': '0',
    '--terra-form-checkbox-checked-symbol-padding-top': '0',
    '--terra-form-checkbox-checked-transform': 'scale(1)',
    '--terra-form-checkbox-checked-transition': 'all 0.2s ease all',
    '--terra-form-checkbox-checked-width': '1.286rem',
  };

  const disabledThemingProperties = {
    '--terra-form-checkbox-disabled-background-color': '#e7e8e8',
    '--terra-form-checkbox-disabled-background-image': 'none',
    '--terra-form-checkbox-disabled-border-color': '#cfd0d1',
    '--terra-form-checkbox-disabled-font-color': '#9fa1a3',
  };

  const disabledHoverThemingProperties = {
    '--terra-form-checkbox-disabled-hover-border-color': '#cfd0d1',
    '--terra-form-checkbox-disabled-hover-border-width': '1px',
  };

  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-checkbox/checkbox/default-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: themingProperties,
    });

    describe('Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.moveToObject('#default');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: { ...themingProperties, ...hoverThemingProperties },
      });
    });

    describe('Checked', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.click('#default');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: { ...themingProperties, ...checkedThemingProperties },
      });
    });

    describe('Focus', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.keys('Tab');
      });

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: { ...themingProperties, ...focusThemingProperties },
      });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'custom - Focus Ring',
        properties: { ...themingProperties, focusRingThemingProperties },
      });
    });
  });

  describe('Disabled', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-checkbox/checkbox/disabled-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: { ...themingProperties, ...disabledThemingProperties },
    });

    describe('Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.moveToObject('#default');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: { ...themingProperties, ...disabledHoverThemingProperties },
      });
    });
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-checkbox/checkbox/hidden-label-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Populated', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-checkbox/checkbox/populated-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-checkbox/checkbox/long-text-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Three Checkboxes, First Defaulted to Checked', () => {
    beforeEach(() => browser.url('/#/raw/tests/form-checkbox/checkbox/multiple-checkboxes'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
