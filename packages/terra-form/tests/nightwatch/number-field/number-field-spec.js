// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default NumberField with a number input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/number-field/default-number-field`)
      .assert.elementPresent('#default-number-field')
      .assert.elementPresent('input[type="number"]');
  },

  'Displays a populated inline NumberField with correct label, help message, and error message': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/number-field/populated-number-field`)
      .assert.elementPresent('#populated-number-field')
      .assert.containsText('label', 'Sales Tax Rate')
      .assert.containsText('small', "Your county's office may have this information")
      .assert.containsText('small:nth-child(4)', 'This field is required');
  },
});
