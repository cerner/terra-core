describe('Checkbox', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  const themingProperties = {
    '--terra-form-checkbox-font-color': '#111619',
    '--terra-form-checkbox-container-margin-bottom': '0.625rem',
    '--terra-form-checkbox-container-margin-right': '1.071rem',
    '--terra-form-checkbox-container-margin-top': '0',
    '--terra-form-checkbox-font-size': '1.286rem',
    '--terra-form-checkbox-line-height': '1.4',
    '--terra-form-checkbox-padding-bottom': '0',
    '--terra-form-checkbox-padding-left': '1.2rem',
    '--terra-form-checkbox-native-input-clip': 'rect(0 0 0 0)',
    '--terra-form-checkbox-native-input-cursor': 'default',
    '--terra-form-checkbox-native-input-font-size': '0',
    '--terra-form-checkbox-native-input-height': '1px',
    '--terra-form-checkbox-native-input-margin-left': '-1px',
    '--terra-form-checkbox-native-input-margin-right': '-1px',
    '--terra-form-checkbox-native-input-overflow': 'hidden',
    '--terra-form-checkbox-native-input-padding': '0',
    '--terra-form-checkbox-native-input-width': '1px',
    '--terra-form-checkbox-label-text-margin-left': '0.643rem',
    '--terra-form-checkbox-background-color': '#fff',
    '--terra-form-checkbox-background-image': 'none',
    '--terra-form-checkbox-border': '1px solid #cfd0d1',
    '--terra-form-checkbox-border-radius': '0.2714rem',
    '--terra-form-checkbox-height': '1.286rem',
    '--terra-form-checkbox-margin-top': '0.2857rem',
    '--terra-form-checkbox-width': '1.286rem',
    '--terra-form-checkbox-checked-background-image': 'none',
  };

  const hoverThemingProperties = {
    '--terra-form-checkbox-hover-border-color': '#800080',
    '--terra-form-checkbox-hover-border-width': '2px',
    '--terra-form-checkbox-checked-hover-border-color': '#800080',
    '--terra-form-checkbox-checked-hover-border-width': '2px',
  };

  const focusThemingProperties = {
    '--terra-form-checkbox-focus-border-color': '#77b1fd',
    '--terra-form-checkbox-focus-border-width': '2px',
  };

  const focusRingThemingProperties = {
    '--terra-form-checkbox-focus-ring-background-color': 'rgba(128, 0, 128, 0.25)',
    '--terra-form-checkbox-focus-ring-height': '32px',
    '--terra-form-checkbox-focus-ring-left': '-8px',
    '--terra-form-checkbox-focus-ring-top': '-3px',
    '--terra-form-checkbox-focus-ring-width': '32px',
    '--terra-form-checkbox-focus-ring-border-radius': '50%',
  };

  const checkedThemingProperties = {
    '--terra-form-checkbox-checked-background-color': '#f00',
    '--terra-form-checkbox-checked-border': '2px solid #f00',
    '--terra-form-checkbox-checked-border-radius': '0.2714rem',
    '--terra-form-checkbox-checked-height': '1.286rem',
    '--terra-form-checkbox-checked-line-height': '0.9',
    '--terra-form-checkbox-checked-symbol-padding-left': '0',
    '--terra-form-checkbox-checked-symbol-padding-right': '0',
    '--terra-form-checkbox-checked-symbol-padding-top': '0',
    '--terra-form-checkbox-checked-transform': 'scale(1)',
    '--terra-form-checkbox-checked-transition': 'all 0.2s ease all',
    '--terra-form-checkbox-checked-width': '1.286rem',
    '--terra-form-checkbox-symbol': 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23ffffff%22%20points%3D%225.6%2C9.6%202.4%2C6.4%200%2C8.8%205.6%2C14.4%2016%2C4%2013.6%2C1.6%20%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E")',
  };

  const disabledThemingProperties = {
    '--terra-form-checkbox-disabled-font-color': '#9fa1a3',
    '--terra-form-checkbox-disabled-background-color': '#e7e8e8',
    '--terra-form-checkbox-disabled-background-image': 'none',
    '--terra-form-checkbox-disabled-border-color': '#cfd0d1',
    '--terra-form-checkbox-disabled-border-width': '1px',
    '--terra-form-checkbox-checked-disabled-border-width': '1px',
    '--terra-form-checkbox-disabled-symbol': 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%3Cpolygon%20fill%3D%22%23cfd0d1%22%20points%3D%225.6%2C9.6%202.4%2C6.4%200%2C8.8%205.6%2C14.4%2016%2C4%2013.6%2C1.6%20%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E")',
  };

  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/default-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: themingProperties,
    });

    describe('Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('[id=default]');
        browser.moveToObject('[id=default]');
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
        browser.waitForVisible('[id=default]');
        browser.click('[for="default"]');
        browser.click('[id=site]');
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
        browser.waitForVisible('[id=default]');
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
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/disabled-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: { ...themingProperties, ...checkedThemingProperties, ...disabledThemingProperties },
    });

    describe('Disabled Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('[id=disabled]');
        browser.moveToObject('[id=disabled]');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: { ...themingProperties, ...checkedThemingProperties, ...disabledThemingProperties },
      });
    });
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/hidden-label-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Populated', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/populated-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Long Text', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/long-text-checkbox'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Three Checkboxes, First Defaulted to Checked', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-form-checkbox/form-checkbox/checkbox/multiple-checkboxes'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
