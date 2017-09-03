// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default Control': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/control/default`)
      .assert.elementPresent('#default-control');
  },

  'Displays a populated Control with correct label, help message, and choices': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/control/populated`)
      .assert.elementPresent('#populated-control')
      .assert.elementPresent('input[type="checkbox"][name="children_present"][value="children_present"]')
      .assert.containsText('label', 'Do you have any Children?');
  },
});
