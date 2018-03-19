// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default Input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/input/default-input`)
      .assert.elementPresent('input');
  },

  'Properly initializes Input with the correct attributes': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/input/populated-input`)
      .assert.elementPresent('input[name="foo"][value="bar"][required]');
  },
});
