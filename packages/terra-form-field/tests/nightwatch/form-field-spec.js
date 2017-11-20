/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a field with a label': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#label').to.be.present.before(10000);
    browser.expect.element('#label > div[class*="label-group"] > label[class*="label"]').to.be.present;
  },

  'Displays an optional field': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#label-optional').to.be.present;
    browser.expect.element('#label-optional > div[class*="label-group"] > label > div[class*="optional"]').to.be.present;
    browser.expect.element('#label-optional > div[class*="label-group"] > label div[class*="optional"]').text.to.contain('(optional)');
  },

  'Displays an required field': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#label-required').to.be.present;
    browser.expect.element('#label-required > div[class*="label-group"] > label > div[class*="required_"]').to.be.present;
    browser.expect.element('#label-required > div[class*="label-group"] > label > div[class*="required_"]').text.to.contain('*');
  },

  'Displays a Field with a hidden label': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#label-hidden').to.be.present;
    browser.expect.element('#label-hidden > div[class*="label-group"][class*="label-group-hidden"]').to.be.present;
    browser.expect.element('#label-hidden > div[class*="label-group"]').to.have.css('display').which.equals('none');
  },

  'Displays a field with help text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#help-text').to.be.present;
    browser.expect.element('#help-text > div[class*="help-text"]').to.be.present;
  },

  'Displays a field with error text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#error-text').to.be.present;
    browser.expect.element('#error-text > div[class*="error-text"]').to.be.present;
  },

  'Displays an invalid optional field with a label, help text and error text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#optional-invalid').to.be.present;
    browser.expect.element('#optional-invalid > div[class*="label-group"] > div[class*="error-icon"]').to.be.present;
    browser.expect.element('#optional-invalid > div[class*="label-group"] > label').to.be.present;
    browser.expect.element('#optional-invalid > div[class*="error-text"]').to.be.present;
    browser.expect.element('#optional-invalid > div[class*="help-text"]').to.be.present;
  },

  'Displays an invalid required field with a label, help text and error text': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/combinations`);
    browser.expect.element('#required-invalid').to.be.present;
    browser.expect.element('#required-invalid > div[class*="label-group"] > div[class*="error-icon"]').to.be.present;
    browser.expect.element('#required-invalid > div[class*="label-group"] > label > div[class*="required_"]').to.be.present;
    browser.expect.element('#required-invalid > div[class*="error-text"]').to.be.present;
    browser.expect.element('#required-invalid > div[class*="help-text"]').to.be.present;
  },

  'Label remains hidden when Field is invalid': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/is-invalid`);

    browser.expect.element('#label-hidden > div[class*="label-group"][class*="label-group-hidden"]').to.be.present;
    browser.click('#toggle-is-invalid');
    browser.expect.element('#label-hidden > div[class*="label-group"]').to.have.css('display').which.equals('none');
  },

  'Label maintains appropriate spacing for error-icon hidden and visible': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/is-invalid`);

    browser.expect.element('#default > div[class*="label-group"] > label[class*="label"]').to.be.present;
    browser.expect.element('#default > div[class*="label-group"] > div[class*="error-icon_"]').to.not.be.present;
    browser.expect.element('#default > div[class*="label-group"] > div[class*="error-icon-hidden"]').to.be.present;
    browser.getElementSize('#default > div[class*="label-group"] > label', (result) => {
      browser.assert.equal(result.status, 0);
      const labelWidth = result.value.width;

      browser.click('#toggle-is-invalid');
      browser.expect.element('#default > div[class*="label-group"] > div[class*="error-icon_"]').to.be.present;
      browser.expect.element('#default > div[class*="label-group"] > div[class*="error-icon-hidden"]').to.not.be.present;

      browser.getElementSize('#default > div[class*="label-group"] > label', (inErrorResult) => {
        browser.assert.equal(inErrorResult.status, 0);
        browser.assert.equal(inErrorResult.value.width, labelWidth);
      });
    });
  },

  'Hidden required label maintains appropriate spacing for error-icon hidden and visible': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/is-invalid`);

    browser.expect.element('#required-hidden > div[class*="label-group"] > div[class*="error-icon_"]').to.not.be.present;
    browser.expect.element('#required-hidden > div[class*="label-group"] > div[class*="error-icon-hidden"]').to.be.present;
    browser.expect.element('#required-hidden > div[class*="label-group"] > label > div[class*="required_"]').to.not.be.present;
    browser.expect.element('#required-hidden > div[class*="label-group"] > label > div[class*="required-hidden"]').to.be.present;

    browser.getElementSize('#required-hidden > div[class*="label-group"] > label', (result) => {
      browser.assert.equal(result.status, 0);
      const labelWidth = result.value.width;

      browser.click('#toggle-is-invalid');
      browser.expect.element('#required-hidden > div[class*="label-group"] > div[class*="error-icon_"]').to.be.present;
      browser.expect.element('#required-hidden > div[class*="label-group"] > div[class*="error-icon-hidden"]').to.not.be.present;
      browser.expect.element('#required-hidden > div[class*="label-group"] > label > div[class*="required_"]').to.be.present;
      browser.expect.element('#required-hidden > div[class*="label-group"] > label > div[class*="required-hidden"]').to.not.be.present;

      browser.getElementSize('#required-hidden > div[class*="label-group"] > label', (inErrorResult) => {
        browser.assert.equal(inErrorResult.status, 0);
        browser.assert.equal(inErrorResult.value.width, labelWidth);
      });
    });
  },

  'Field maintains width when is-invalid': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/is-invalid`);

    browser.expect.element('#inline-2 > div[class*="label-group"] > div[class*="error-icon_"]').to.not.be.present;
    browser.expect.element('#inline-2 > div[class*="label-group"] > div[class*="error-icon-hidden"]').to.be.present;
    browser.expect.element('#inline-2 > div[class*="label-group"] > label > div[class*="required_"]').to.not.be.present;
    browser.expect.element('#inline-2 > div[class*="label-group"] > label > div[class*="required-hidden"]').to.be.present;

    browser.getElementSize('#inline-2', (result) => {
      browser.assert.equal(result.status, 0);
      const labelWidth = result.value.width;

      browser.click('#toggle-is-invalid');
      browser.expect.element('#inline-2 > div[class*="label-group"] > div[class*="error-icon_"]').to.be.present;
      browser.expect.element('#inline-2 > div[class*="label-group"] > div[class*="error-icon-hidden"]').to.not.be.present;
      browser.expect.element('#inline-2 > div[class*="label-group"] > label > div[class*="required_"]').to.be.present;
      browser.expect.element('#inline-2 > div[class*="label-group"] > label > div[class*="required-hidden"]').to.not.be.present;

      browser.getElementSize('#inline-2', (inErrorResult) => {
        browser.assert.equal(inErrorResult.status, 0);
        browser.assert.equal(inErrorResult.value.width, labelWidth);
      });
    });
  },

  'Displays inline field correctly': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-field-tests/inline`);
    browser.expect.element('#inline-1"]').to.not.be.present;
    browser.expect.element('#inline-2"]').to.not.be.present;
    browser.expect.element('#inline-3"]').to.not.be.present;
  },

  'Displays a default Field with the correct text wrapping': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-field-tests/text-wrap`)
      .expect.element('#field').to.be.present;
  },
});
