// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default TextField with a text input': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/text-field/default`)
      .assert.elementPresent('#default-text-field')
      .assert.elementPresent('input[type="text"]');
  },

  'Displays a populated inline TextField with correct label and help message': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/text-field/populated`)
      .assert.elementPresent('#populated-text-field')
      .assert.containsText('label', 'Associate ID')
      .assert.containsText('div[class*="help-text"]', 'This is the ID you were given during orientation');
  },
});
