// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default Control': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/control/default-control`)
      .assert.elementPresent('#default-control');
  },

  'Displays a populated Control with correct label, help message, and choices': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/control/populated-control`)
      .assert.elementPresent('#populated-control')
      .assert.elementPresent('input[type="checkbox"][name="children_present"][value="children_present"]')
      .assert.containsText('label', 'Do you have any Children?');
  },
});
