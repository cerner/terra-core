/* global browser, Terra */

const viewports = Terra.viewports('tiny', 'large');

describe('CheckboxField', () => {
  describe('Valid', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/form-checkbox/checkbox-field/controlled-checkbox-field');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-form-checkbox-field-margin-bottom': '2em',
        '--terra-form-checkbox-field-inline-margin-right': '2em',
        '--terra-form-checkbox-field-label-font-size': '1.5rem',
        '--terra-form-checkbox-field-label-margin-bottom': '0.714em',
        '--terra-form-checkbox-field-label-color': 'rgba(64, 64, 64, 1)',
        '--terra-form-checkbox-field-label-font-weight': '900',
        '--terra-form-checkbox-field-error-icon': '#e41296',
        '--terra-form-checkbox-field-label-error-icon-display': 'inline-block',
        '--terra-form-checkbox-field-label-error-icon-padding-right': '2em',
        '--terra-form-checkbox-field-label-required-color': '#00ff00',
        '--terra-form-checkbox-field-label-required-padding-right': '2em',
        '--terra-form-checkbox-field-label-optional-font-style': 'underline',
        '--terra-form-checkbox-field-label-optional-padding-left': '2em',
        '--terra-form-checkbox-field-help-text-color': '#ff0000',
        '--terra-form-checkbox-field-help-text-font-size': '2em',
        '--terra-form-checkbox-field-help-text-font-weight': '900',
        '--terra-form-checkbox-field-help-text-margin-top': '2em',
        '--terra-form-checkbox-field-error-text-color': '#0000ff',
        '--terra-form-checkbox-field-error-text-font-size': '2em',
        '--terra-form-checkbox-field-error-text-font-weight': '900',
        '--terra-form-checkbox-field-error-text-margin-top': '2em',
      },
    });
  });

  describe('Interactions - Invalid State', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/form-checkbox/checkbox-field/controlled-checkbox-field');
      browser.waitForVisible('#testing-checkbox-field');
      browser.click('#website-dept');
      browser.click('#ux-dept');
    });

    Terra.should.matchScreenshot({ viewports: [viewports[0]] });
  });

  describe('Interactions - Valid State', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/form-checkbox/checkbox-field/controlled-checkbox-field');
      browser.waitForVisible('#testing-checkbox-field');
      browser.click('#website-dept');
      browser.click('#ux-dept');
      browser.click('#website-dept');
      browser.click('#ux-dept');
    });

    Terra.should.matchScreenshot({ viewports: [viewports[0]] });
  });

  describe('Optional', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/form-checkbox/checkbox-field/optional-checkbox-field');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Hidden Legend', () => {
    beforeEach(() => {
      browser.url('/#/raw/tests/form-checkbox/checkbox-field/hidden-legend');
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
