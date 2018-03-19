/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays a default Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-checkbox/default-checkbox`);
    browser.expect.element('#default').to.be.present;
  },

  'Displays a disabled Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-checkbox/disabled-checkbox`);
    browser.expect.element('#disabled').to.not.be.enabled;
    browser.click('#disabled');
    browser.expect.element('#disabled').to.not.be.selected;
  },

  'Displays a checkbox with a hidden label': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-checkbox/hidden-label-checkbox`);
    browser.expect.element('#hidden').to.have.attribute('aria-label').equals('can you see me?');
    browser.expect.element('[for="hidden"]').text.to.equal('');
  },

  'Displays a populated Checkbox with correct label, help message, and choices': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-checkbox/populated-checkbox`);
    browser.expect.element('[name="children_present"][value="children_present"]').to.be.present;
    browser.expect.element('[for="populated"]').text.to.equal('Do you have any Children?');
  },

  'Displays a long text Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-checkbox/long-text-checkbox`);
    browser.expect.element('[for="longText"]').text.to.equal(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
  },

  'Displays three Checkboxes. First checkbox defaults to checked': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-checkbox/multiple-checkboxes`);
    browser.expect.element('[for="first"]').text.to.equal('First Checkbox');
    browser.expect.element('#first').to.be.selected;
    browser.expect.element('[for="second"').text.to.equal('Second Checkbox');
    browser.expect.element('[for="third"]').text.to.equal('Third Checkbox');
  },
});
