describe('Radio', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  const themingProperties = {
    '--terra-form-radio-font-color': '#111619',
    '--terra-form-radio-container-margin-bottom': '0.625rem',
    '--terra-form-radio-container-margin-right': '1.071rem',
    '--terra-form-radio-container-margin-top': '0',
    '--terra-form-radio-font-size': '1.286rem',
    '--terra-form-radio-line-height': '1.4',
    '--terra-form-radio-padding-bottom': '0',
    '--terra-form-radio-padding-left': '1.2rem',
    '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
    '--terra-form-radio-native-input-cursor': 'default',
    '--terra-form-radio-native-input-font-size': 'none',
    '--terra-form-radio-native-input-height': '1px',
    '--terra-form-radio-native-input-margin-left': 'none',
    '--terra-form-radio-native-input-margin-right': 'none',
    '--terra-form-radio-native-input-overflow': 'hidden',
    '--terra-form-radio-native-input-padding': '0',
    '--terra-form-radio-native-input-width': '1px',
    '--terra-form-radio-label-text-margin-left': '0.643rem',
    '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
    '--terra-form-radio-outer-ring-background-image': 'none',
    '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
    '--terra-form-radio-outer-ring-border-radius': '50%',
    '--terra-form-radio-outer-ring-height': '20px',
    '--terra-form-radio-outer-ring-margin-top': '4px',
    '--terra-form-radio-outer-ring-width': '20px',
    '--terra-form-radio-inner-ring-background-color': '#fff',
    '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 1px',
    '--terra-form-radio-inner-ring-box-shadow': '0 -1px 1px 0 #c3ccd4 inset',
    '--terra-form-radio-inner-ring-height': '14px',
    '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    '--terra-form-radio-inner-ring-width': '14px',
  };

  const hoverThemingProperties = {
    '--terra-form-radio-hover-border-color': '#800080',
    '--terra-form-radio-hover-border-width': '2px',
    '--terra-form-radio-outer-ring-hover-checked-border-color': '#800080',
    '--terra-form-radio-outer-ring-hover-checked-border-width': '2px',
  };

  const focusThemingProperties = {
    '--terra-form-radio-focus-border-color': '#88a8ef',
    '--terra-form-radio-focus-border-width': '2px',
  };

  const focusRingThemingProperties = {
    '--terra-form-radio-focus-before-ring-background-color': 'rgba(128, 0, 128, 0.25)',
    '--terra-form-radio-focus-before-ring-height': '32px',
    '--terra-form-radio-focus-before-ring-left': '-3px',
    '--terra-form-radio-focus-before-ring-top': '-3px',
    '--terra-form-radio-focus-before-ring-width': '32px',
  };

  const checkedThemingProperties = {
    '--terra-form-radio-outer-ring-checked-background-color': '#fff',
    '--terra-form-radio-outer-ring-checked-border': '#4a90e2 solid 1px',
    '--terra-form-radio-outer-ring-checked-background-image': 'none',
    '--terra-form-radio-outer-ring-checked-border-radius': '50%',
    '--terra-form-radio-outer-ring-checked-height': '20px',
    '--terra-form-radio-outer-ring-checked-margin-top': '4px',
    '--terra-form-radio-outer-ring-checked-width': '20px',
    '--terra-form-radio-inner-ring-checked-background-color': '#f00',
    '--terra-form-radio-inner-ring-checked-border': 'rgb(255, 0, 0) solid 1px',
    '--terra-form-radio-inner-ring-checked-box-shadow': '0 1px 1px 0 #a43531 inset',
    '--terra-form-radio-inner-ring-checked-height': '14px',
    '--terra-form-radio-inner-ring-checked-transition': 'all 0.2s ease all',
    '--terra-form-radio-inner-ring-checked-width': '14px',
  };

  const disabledThemingProperties = {
    '--terra-form-radio-disabled-font-color': '#ffc0cb',
    '--terra-form-radio-outer-ring-disabled-background-color': 'rgba(0, 0, 0, 0.05)',
    '--terra-form-radio-outer-ring-disabled-border-color': 'rgba(134, 138, 140, 0.4)',
    '--terra-form-radio-inner-ring-disabled-background-color': 'rgba(0, 0, 0, 0.05)',
    '--terra-form-radio-inner-ring-disabled-border-color': 'rgba(134, 138, 140, 0.4)',
    '--terra-form-radio-outer-ring-checked-disabled-background-color': 'rgba(0, 0, 0, 0.05)',
    '--terra-form-radio-outer-ring-checked-disabled-background-image': 'none',
    '--terra-form-radio-outer-ring-checked-disabled-border-color': 'rgba(134, 138, 140, 0.4)',
    '--terra-form-radio-inner-ring-checked-disabled-background-color': '#ffc0cb',
    '--terra-form-radio-inner-ring-checked-disabled-border-color': 'rgba(134, 138, 140, 0.4)',
  };

  const labelIsHiddenThemingProperties = {
    '--terra-form-radio-label-is-hidden-height': '20px',
    '--terra-form-radio-label-is-hidden-width': '20px',
  };


  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/default-radio'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
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
        browser.click('[for="default"]');
        browser.click('#site');
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
        properties: { ...themingProperties, ...checkedThemingProperties, ...focusThemingProperties },
      });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'custom - Focus Ring',
        properties: {
          ...themingProperties,
          ...checkedThemingProperties,
          ...focusThemingProperties,
          ...focusRingThemingProperties,
        },
      });
    });
  });

  describe('Disabled', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/disabled-radio');
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: { ...themingProperties, ...checkedThemingProperties, ...disabledThemingProperties },
    });
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-radio/form-radio/radio/hidden-radio'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: { ...themingProperties, ...checkedThemingProperties, ...labelIsHiddenThemingProperties },
    });
  });
});
