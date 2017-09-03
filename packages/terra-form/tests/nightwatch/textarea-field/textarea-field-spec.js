// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default TextareaField with a number input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea-field/default`)
      .assert.elementPresent('#default-textarea-field')
      .assert.elementPresent('textarea');
  },

  'Displays a populated inline TextareaField with correct label, help message, and error message': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/textarea-field/populated`)
      .assert.elementPresent('#populated-textarea-field')
      .assert.containsText('label', 'Profile Description')
      .assert.containsText('small', 'This is what will be seen on your main page')
      .assert.containsText('small:nth-child(4)', 'Profile Description is required');
  },
});
