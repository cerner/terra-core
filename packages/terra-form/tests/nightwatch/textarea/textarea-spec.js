// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Displays a default Textarea with a number input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/default`)
      .assert.elementPresent('textarea');
  },

  'Displays a populated Textarea with correct name': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea/populated`)
      .assert.elementPresent('textarea[name="job_experience"]');
  },
});
