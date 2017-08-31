// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default Select with a single option': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/select/default`)
      .assert.elementPresent('select')
      .assert.elementPresent('option:nth-of-type(1)') // 1 option present
      .assert.elementNotPresent('option:nth-of-type(2)');
  },

  'Displays a Select with a single option, using deprecated choices prop': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/select/choices_prop`)
      .assert.elementPresent('select')
      .assert.elementPresent('option:nth-of-type(1)') // 1 option present
      .assert.elementNotPresent('option:nth-of-type(2)');
  },

  'Displays a populated Select with multiple options': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/select/populated`)
      .assert.elementPresent('select')
      .assert.elementPresent('option:nth-of-type(2)') // 2 options present
      .assert.elementNotPresent('option:nth-of-type(3)');
  },

  'Displays a populated Select with a defaultValue selected and can change selection': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/select/populated`)
      .assert.value('select[name="zounds"]', 'b')
      .assert.containsText('select[name="zounds"]', 'boo')
      .setValue('select[name="zounds"]', 'm')
      .assert.value('select[name="zounds"]', 'm')
      .assert.containsText('select[name="zounds"]', 'moo');
  },

  'Displays a populated Select with a onChange and value for controlled form submission': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/select/populated_controlled`)
      .assert.value('select[name="animal"]', 'micros')
      .assert.elementPresent('option:nth-of-type(4)') // 4 options present
      .assert.elementNotPresent('option:nth-of-type(5)');
  },

  'Controlled Select correctly submits form data': (browser) => {
    browser
      .url(`${browser.launchUrl}/#/tests/form-tests/select/populated_controlled`)
      .assert.value('select[name="animal"]', 'micros')
      .setValue('select[name="animal"]', 'kittens')
      .click('#select-submit')
      .assert.containsText('#select-submission', 'Submitted with data {"animal":"kittens"}');
  },
});
