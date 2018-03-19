// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default Textarea with a number input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/textarea/default-textarea`)
      .assert.elementPresent('textarea');
  },

  'Displays a populated Textarea with correct name': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/raw/tests/form/textarea/populated-textarea`)
      .assert.elementPresent('textarea[name="job_experience"]');
  },
});
