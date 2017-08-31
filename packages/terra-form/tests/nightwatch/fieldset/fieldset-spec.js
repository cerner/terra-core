// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default Fieldset': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/fieldset/default`)
      .assert.elementPresent('#default-fieldset');
  },

  'Displays a populated inline Fieldset with correct legend, help message, and error message': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/fieldset/populated`)
      .assert.elementPresent('#populated-fieldset')
      .assert.containsText('legend', 'Do you have any Children?')
      .assert.containsText('small', 'Families are eligible for family package plans')
      .assert.containsText('small:nth-child(3)', 'This field is required');
  },
});
