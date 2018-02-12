/* eslint-disable no-unused-expressions */
/* global browser, Terra, beforeEach */

/**
* Generates a test for a combination of themed properties given and runs a screenshot assertion.
* @property {Object} customProperties - An object containing the CSS custom properties to assert.
* @property {String} testName - Name of the test
*/
const themeCombinationOfCustomProperties = (testName, customProperties) => {
  global.it(`[${testName}]`, () => {
    Object.entries(customProperties).forEach(([key, value]) => {
      global.browser.execute(`document.documentElement.style.setProperty('${key}', '${value}')`);
    });
    global.expect(global.browser.checkElement('#wdio-test-wrapper > *:first-child')).to.matchReference();
  });
};

describe('Radio', () => {
  beforeEach(() => {
    browser.setViewportSize(Terra.viewports('tiny')[0]);
  });

  describe('Default', () => {
    beforeEach(() => {
      browser.url('/#/tests/form-radio-tests/default');
    });

    Terra.should.matchScreenshot({ selector: '#wdio-test-wrapper > *:first-child' });
    Terra.should.beAccessible();

    themeCombinationOfCustomProperties('custom', {
      '--terra-form-radio-container-margin-right': '1rem',
      '--terra-form-radio-container-margin-top': '0',
      '--terra-form-radio-font-size, 1rem': '1.1rem',
      '--terra-form-radio-line-height': '1.7',
      '--terra-form-radio-native-input-margin-left': '0.3rem',
      '--terra-form-radio-native-input-margin-right': '0.3rem',
      '--terra-form-radio-label-text-margin-left': '1.5em',
      '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
      '--terra-form-radio-native-input-cursor': 'default',
      '--terra-form-checkbox-native-input-font-size': 'none',
      '--terra-form-checkbox-native-input-height': '1px',
      '--terra-form-checkbox-native-input-margin-left': 'none',
      '--terra-form-checkbox-native-input-margin-right': 'none',
      '--terra-form-checkbox-native-input-overflow': 'hidden',
      '--terra-form-checkbox-native-input-padding': 0,
      '--terra-form-checkbox-native-input-width': '1px',
      '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
      '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
      '--terra-form-radio-outer-ring-border-radius': '50%',
      '--terra-form-radio-outer-ring-height': '20px',
      '--terra-form-radio-outer-ring-margin-top': '4px',
      '--terra-form-radio-outer-ring-width': '20px',
      '--terra-form-radio-inner-ring-background-color': '#fff',
      '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 1px',
      '--terra-form-radio-inner-ring-height': '14px',
      '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      '--terra-form-radio-inner-ring-width': '14px',
    });

    describe('Hover', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.moveToObject('#default');
      });

      Terra.should.matchScreenshot({ selector: '#wdio-test-wrapper > *:first-child' });
      Terra.should.beAccessible();

      themeCombinationOfCustomProperties('custom', {
        '--terra-form-radio-container-margin-right': '1rem',
        '--terra-form-radio-container-margin-top': '0',
        '--terra-form-radio-font-size, 1rem': '1.1rem',
        '--terra-form-radio-line-height': '1.7',
        '--terra-form-radio-native-input-margin-left': '0.3rem',
        '--terra-form-radio-native-input-margin-right': '0.3rem',
        '--terra-form-radio-label-text-margin-left': '1.5em',
        '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
        '--terra-form-radio-native-input-cursor': 'default',
        '--terra-form-checkbox-native-input-font-size': 'none',
        '--terra-form-checkbox-native-input-height': '1px',
        '--terra-form-checkbox-native-input-margin-left': 'none',
        '--terra-form-checkbox-native-input-margin-right': 'none',
        '--terra-form-checkbox-native-input-overflow': 'hidden',
        '--terra-form-checkbox-native-input-padding': 0,
        '--terra-form-checkbox-native-input-width': '1px',
        '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
        '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
        '--terra-form-radio-outer-ring-border-radius': '50%',
        '--terra-form-radio-outer-ring-height': '20px',
        '--terra-form-radio-outer-ring-margin-top': '4px',
        '--terra-form-radio-outer-ring-width': '20px',
        '--terra-form-radio-inner-ring-background-color': '#fff',
        '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 1px',
        '--terra-form-radio-inner-ring-height': '14px',
        '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        '--terra-form-radio-inner-ring-width': '14px',

        '--terra-form-radio-hover-border-color': '#800080',
        '--terra-form-radio-hover-border-width': '2px',
      });
    });

    describe('Checked', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.click('#default');
      });

      Terra.should.matchScreenshot({ selector: '#wdio-test-wrapper > *:first-child' });
      Terra.should.beAccessible();

      themeCombinationOfCustomProperties('custom', {
        '--terra-form-radio-container-margin-right': '1rem',
        '--terra-form-radio-container-margin-top': '0',
        '--terra-form-radio-font-size, 1rem': '1.1rem',
        '--terra-form-radio-line-height': '1.7',
        '--terra-form-radio-native-input-margin-left': '0.3rem',
        '--terra-form-radio-native-input-margin-right': '0.3rem',
        '--terra-form-radio-label-text-margin-left': '1.5em',
        '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
        '--terra-form-radio-native-input-cursor': 'default',
        '--terra-form-checkbox-native-input-font-size': 'none',
        '--terra-form-checkbox-native-input-height': '1px',
        '--terra-form-checkbox-native-input-margin-left': 'none',
        '--terra-form-checkbox-native-input-margin-right': 'none',
        '--terra-form-checkbox-native-input-overflow': 'hidden',
        '--terra-form-checkbox-native-input-padding': 0,
        '--terra-form-checkbox-native-input-width': '1px',
        '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
        '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
        '--terra-form-radio-outer-ring-border-radius': '50%',
        '--terra-form-radio-outer-ring-height': '20px',
        '--terra-form-radio-outer-ring-margin-top': '4px',
        '--terra-form-radio-outer-ring-width': '20px',
        '--terra-form-radio-inner-ring-background-color': '#fff',
        '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 0',
        '--terra-form-radio-inner-border-width': '1px',
        '--terra-form-radio-inner-ring-height': '14px',
        '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        '--terra-form-radio-inner-ring-width': '14px',

        '--terra-form-radio-outer-ring-checked-background-color': '#fff',
        '--terra-form-radio-outer-ring-checked-border': '#4a90e2 solid 1px',
        '--terra-form-radio-outer-ring-checked-border-radius': '50%',
        '--terra-form-radio-outer-ring-checked-height': '20px',
        '--terra-form-radio-outer-ring-checked-margin-top': '4px',
        '--terra-form-radio-outer-ring-checked-width': '20px',
        '--terra-form-radio-inner-ring-checked-background-color': 'rgb(255, 0, 0)',
        '--terra-form-radio-inner-ring-checked-border': 'rgb(255, 0, 0) solid 1px',
        '--terra-form-radio-inner-ring-checked-height': '14px',
        '--terra-form-radio-inner-ring-checked-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        '--terra-form-radio-inner-ring-checked-width': '14px',
      });
    });

    describe('Focus', () => {
      beforeEach(() => {
        browser.waitForVisible('#default');
        browser.keys('Tab');
      });

      Terra.should.matchScreenshot({ selector: '#wdio-test-wrapper > *:first-child' });
      Terra.should.beAccessible();

      themeCombinationOfCustomProperties('custom', {
        '--terra-form-radio-container-margin-right': '1rem',
        '--terra-form-radio-container-margin-top': '0',
        '--terra-form-radio-font-size, 1rem': '1.1rem',
        '--terra-form-radio-line-height': '1.7',
        '--terra-form-radio-native-input-margin-left': '0.3rem',
        '--terra-form-radio-native-input-margin-right': '0.3rem',
        '--terra-form-radio-label-text-margin-left': '1.5em',
        '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
        '--terra-form-radio-native-input-cursor': 'default',
        '--terra-form-checkbox-native-input-font-size': 'none',
        '--terra-form-checkbox-native-input-height': '1px',
        '--terra-form-checkbox-native-input-margin-left': 'none',
        '--terra-form-checkbox-native-input-margin-right': 'none',
        '--terra-form-checkbox-native-input-overflow': 'hidden',
        '--terra-form-checkbox-native-input-padding': 0,
        '--terra-form-checkbox-native-input-width': '1px',
        '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
        '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
        '--terra-form-radio-outer-ring-border-radius': '50%',
        '--terra-form-radio-outer-ring-height': '20px',
        '--terra-form-radio-outer-ring-margin-top': '4px',
        '--terra-form-radio-outer-ring-width': '20px',
        '--terra-form-radio-inner-ring-background-color': '#fff',
        '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 1px',
        '--terra-form-radio-inner-ring-height': '14px',
        '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        '--terra-form-radio-inner-ring-width': '14px',

        '--terra-form-radio-focus-border-color': '#88a8ef',
        '--terra-form-radio-focus-border-width': '2px',
      });

      themeCombinationOfCustomProperties('custom - Focus Ring', {
        '--terra-form-radio-container-margin-right': '1rem',
        '--terra-form-radio-container-margin-top': '0',
        '--terra-form-radio-font-size, 1rem': '1.1rem',
        '--terra-form-radio-line-height': '1.7',
        '--terra-form-radio-native-input-margin-left': '0.3rem',
        '--terra-form-radio-native-input-margin-right': '0.3rem',
        '--terra-form-radio-label-text-margin-left': '1.5em',
        '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
        '--terra-form-radio-native-input-cursor': 'default',
        '--terra-form-checkbox-native-input-font-size': 'none',
        '--terra-form-checkbox-native-input-height': '1px',
        '--terra-form-checkbox-native-input-margin-left': 'none',
        '--terra-form-checkbox-native-input-margin-right': 'none',
        '--terra-form-checkbox-native-input-overflow': 'hidden',
        '--terra-form-checkbox-native-input-padding': 0,
        '--terra-form-checkbox-native-input-width': '1px',
        '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
        '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
        '--terra-form-radio-outer-ring-border-radius': '50%',
        '--terra-form-radio-outer-ring-height': '20px',
        '--terra-form-radio-outer-ring-margin-top': '4px',
        '--terra-form-radio-outer-ring-width': '20px',
        '--terra-form-radio-inner-ring-background-color': '#fff',
        '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 1px',
        '--terra-form-radio-inner-border-width': '1px',
        '--terra-form-radio-inner-ring-height': '14px',
        '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
        '--terra-form-radio-inner-ring-width': '14px',

        '--terra-form-radio-focus-ring-background-color': 'rgba(74, 144, 226, 0.25)',
        '--terra-form-radio-focus-ring-height': '30px',
        '--terra-form-radio-focus-ring-left': '-5px',
        '--terra-form-radio-focus-ring-top': '-5px',
        '--terra-form-radio-focus-ring-width': '30px',
      });
    });
  });

  describe('Disabled', () => {
    beforeEach(() => {
      browser.url('/#/tests/form-radio-tests/disabled');
    });

    Terra.should.matchScreenshot({ selector: '#wdio-test-wrapper > *:first-child' });
    Terra.should.beAccessible();

    themeCombinationOfCustomProperties('custom', {
      '--terra-form-radio-container-margin-right': '1rem',
      '--terra-form-radio-container-margin-top': '0',
      '--terra-form-radio-font-size, 1rem': '1.1rem',
      '--terra-form-radio-line-height': '1.7',
      '--terra-form-radio-native-input-margin-left': '0.3rem',
      '--terra-form-radio-native-input-margin-right': '0.3rem',
      '--terra-form-radio-label-text-margin-left': '1.5em',
      '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
      '--terra-form-radio-native-input-cursor': 'default',
      '--terra-form-checkbox-native-input-font-size': 'none',
      '--terra-form-checkbox-native-input-height': '1px',
      '--terra-form-checkbox-native-input-margin-left': 'none',
      '--terra-form-checkbox-native-input-margin-right': 'none',
      '--terra-form-checkbox-native-input-overflow': 'hidden',
      '--terra-form-checkbox-native-input-padding': 0,
      '--terra-form-checkbox-native-input-width': '1px',
      '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
      '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
      '--terra-form-radio-outer-ring-border-radius': '50%',
      '--terra-form-radio-outer-ring-height': '20px',
      '--terra-form-radio-outer-ring-margin-top': '4px',
      '--terra-form-radio-outer-ring-width': '20px',
      '--terra-form-radio-inner-ring-background-color': '#fff',
      '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 1px',
      '--terra-form-radio-inner-border-width': '1px',
      '--terra-form-radio-inner-ring-height': '14px',
      '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      '--terra-form-radio-inner-ring-width': '14px',

      '--terra-form-radio-disabled-font-color': '#ffc0cb',
      '--terra-form-radio-outer-ring-disabled-background-color': 'rgba(0, 0, 0, 0.05)',
      '--terra-form-radio-outer-ring-disabled-border-color': 'rgba(134, 138, 140, 0.4)',
      '--terra-form-radio-inner-ring-disabled-background-color': 'rgba(0, 0, 0, 0.05)',
      '--terra-form-radio-inner-ring-disabled-border-color': 'rgba(134, 138, 140, 0.4)',
    });
  });

  describe('Hidden Label', () => {
    beforeEach(() => browser.url('/#/tests/form-radio-tests/hidden'));

    Terra.should.matchScreenshot({ selector: '#wdio-test-wrapper > *:first-child' });
    Terra.should.beAccessible();

    themeCombinationOfCustomProperties('custom', {
      '--terra-form-radio-container-margin-right': '1rem',
      '--terra-form-radio-container-margin-top': '0',
      '--terra-form-radio-font-size, 1rem': '1.1rem',
      '--terra-form-radio-line-height': '1.7',
      '--terra-form-radio-native-input-margin-left': '0.3rem',
      '--terra-form-radio-native-input-margin-right': '0.3rem',
      '--terra-form-radio-label-text-margin-left': '1.5em',
      '--terra-form-radio-native-input-clip': 'rect(0 0 0 0)',
      '--terra-form-radio-native-input-cursor': 'default',
      '--terra-form-checkbox-native-input-font-size': 'none',
      '--terra-form-checkbox-native-input-height': '1px',
      '--terra-form-checkbox-native-input-margin-left': 'none',
      '--terra-form-checkbox-native-input-margin-right': 'none',
      '--terra-form-checkbox-native-input-overflow': 'hidden',
      '--terra-form-checkbox-native-input-padding': 0,
      '--terra-form-checkbox-native-input-width': '1px',
      '--terra-form-radio-outer-ring-background-color': 'rgb(255, 255, 255)',
      '--terra-form-radio-outer-ring-border': '#a2c2e0 solid 1px',
      '--terra-form-radio-outer-ring-border-radius': '50%',
      '--terra-form-radio-outer-ring-height': '20px',
      '--terra-form-radio-outer-ring-margin-top': '4px',
      '--terra-form-radio-outer-ring-width': '20px',
      '--terra-form-radio-inner-ring-background-color': '#fff',
      '--terra-form-radio-inner-ring-border': '#a2c2e0 solid 1px',
      '--terra-form-radio-inner-border-width': '1px',
      '--terra-form-radio-inner-ring-height': '14px',
      '--terra-form-radio-inner-ring-transition': 'all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      '--terra-form-radio-inner-ring-width': '14px',

      '--terra-form-radio-label-is-hidden-height': '20px',
      '--terra-form-radio-label-is-hidden-width': '20px',
    });
  });
});
