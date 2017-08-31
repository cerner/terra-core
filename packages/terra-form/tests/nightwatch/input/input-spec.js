// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default Input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/input/default`)
      .assert.elementPresent('input');
  },

  'Properly initializes Input with the correct attributes': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/input/populated`)
      .assert.elementPresent('input[name="foo"][value="bar"][required]');
  },
});
