/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/default`);
    browser.expect.element('#default').to.be.present;
  },

  'Displays a disabled Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/disabled`);
    browser.expect.element('#disabled[class*="is-disabled"]').to.be.present;
  },

  'Displays a populated Checkbox with correct label, help message, and choices': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/populated`);
    browser.expect.element('#populated').to.be.present;
    browser.expect.element('[name="children_present"][value="children_present"]').to.be.present;
    browser.expect.element('#populated').text.contain('Do you have any Children?');
  },
});
