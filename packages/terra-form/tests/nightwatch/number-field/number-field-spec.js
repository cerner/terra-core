// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default NumberField with a number input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/number-field/default`)
      .assert.elementPresent('#default-number-field')
      .assert.elementPresent('input[type="number"]');
  },

  'Displays a populated inline NumberField with correct label and help message': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/number-field/populated`)
      .assert.elementPresent('#populated-number-field')
      .assert.containsText('label', 'Sales Tax Rate')
      .assert.containsText('div[class*="help-text"]', "Your county's office may have this information");
  },
});
