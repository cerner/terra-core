// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default Field': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/field/default-field`)
      .assert.elementPresent('#default-field');
  },

  'Displays a populated inline Field with correct label, help message, and error message': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/field/populated-field`)
      .assert.elementPresent('#populated-field')
      .assert.containsText('label', 'Do you have any Children?')
      .assert.containsText('small', 'Families are eligible for family package plans')
      .assert.containsText('small:nth-child(3)', 'This field is required');
  },
});
