/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'large');

describe('RadioField', () => {
  describe('RadioField Valid', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/controlled-radio-field');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-radio-field-margin-bottom': '2em',
        '--terra-form-radio-field-inline-margin-right': '2em',
        '--terra-form-radio-field-label-font-size': '1.5rem',
        '--terra-form-radio-field-label-margin-bottom': '0.714em',
        '--terra-form-radio-field-label-color': 'rgba(64, 64, 64, 1)',
        '--terra-form-radio-field-label-font-weight': '900',
        '--terra-form-radio-field-error-icon': '#e41296',
        '--terra-form-radio-field-label-error-icon-display': 'inline-block',
        '--terra-form-radio-field-label-error-icon-padding-right': '2em',
        '--terra-form-radio-field-label-required-color': '#00ff00',
        '--terra-form-radio-field-label-required-padding-right': '2em',
        '--terra-form-radio-field-label-optional-font-style': 'underline',
        '--terra-form-radio-field-label-optional-padding-left': '2em',
        '--terra-form-radio-field-help-text-color': '#ff0000',
        '--terra-form-radio-field-help-text-font-size': '2em',
        '--terra-form-radio-field-help-text-font-weight': '900',
        '--terra-form-radio-field-help-text-margin-top': '2em',
        '--terra-form-radio-field-error-text-color': '#0000ff',
        '--terra-form-radio-field-error-text-font-size': '2em',
        '--terra-form-radio-field-error-text-font-weight': '900',
        '--terra-form-radio-field-error-text-margin-top': '2em',
      },
    });
  });

  describe('RadioField Interactions - Valid State', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/controlled-radio-field');
      browser.waitForVisible('#testing-radio-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.should.matchScreenshot({ viewports: [viewports[0]] });
  });

  describe('RadioField Interactions - Valid State with hideRequired', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/hide-required-invalid-radio-field');
      browser.waitForVisible('#testing-radio-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.should.matchScreenshot({ viewports: [viewports[0]] });
  });

  describe('RadioField Interactions - Invalid State with hideRequired', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/hide-required-invalid-radio-field');
      browser.waitForVisible('#testing-radio-field');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
      browser.click('[for="website-dept"]');
      browser.click('[for="ux-dept"]');
    });

    Terra.should.matchScreenshot({ viewports: [viewports[0]] });
  });

  describe('RadioField Optional', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/optional-radio-field');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('RadioField Hidden Legend', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/terra-form-radio/form-radio/field/hidden-legend');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
