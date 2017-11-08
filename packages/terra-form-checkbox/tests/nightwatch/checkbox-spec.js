/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a Checkbox that defaults to checked': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/default`);
    browser.expect.element('#default').to.be.present;
    browser.expect.element('#default').to.be.selected;
  },

  'Displays a disabled Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/disabled`);
    browser.expect.element('#disabled').to.not.be.enabled;
    browser.click('#disabled');
    browser.expect.element('#disabled').to.not.be.selected;
  },

  'Displays a populated Checkbox with correct label, help message, and choices': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/populated`);
    browser.expect.element('#populated').to.be.present;
    browser.expect.element('[name="children_present"][value="children_present"]').to.be.present;
    browser.expect.element('.label').text.to.equal('Do you have any Children?');
  },

  'Displays a long text Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/longText`);
    browser.expect.element('.label').text.to.equal(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
  },

  'Displays three Checkboxes': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/checkbox-tests/multiple`);
    browser.expect.element('#first').to.be.present;
    browser.expect.element('#second').to.be.present;
    browser.expect.element('#third').to.be.present;
  },
});
