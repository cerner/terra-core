/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default form-radio': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-radio-tests/default`)
      .expect.element('#default').to.be.present;
  },
  'Displays a disabled Checkbox': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-radio-tests/disabled`);
    browser.expect.element('#disabled').to.not.be.enabled;
    browser.click('#disabled');
    browser.expect.element('#disabled').to.not.be.selected;
  },

  'Displays a radio with a hidden label': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-radio-tests/hidden`);
    browser.expect.element('#hidden').to.have.attribute('aria-label').equals('can you see me?');
    browser.expect.element('[for="hidden"]').text.to.equal('');
  },

  'Displays a populated radio with correct label, help message, and choices': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-radio-tests/populated`);
    browser.expect.element('[name="children_present"][value="children_present"]').to.be.present;
    browser.expect.element('[for="populated"]').text.to.equal('Do you have any Children?');
  },

  'Displays a long text Radio': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-radio-tests/long-text`);
    browser.expect.element('[for="longText"]').text.to.equal(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ' +
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua');
  },

  'Displays three Radio buttons. First radio defaults to checked': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/form-radio-tests/multiple`);
    browser.expect.element('[for="first"]').text.to.equal('First Radio');
    browser.expect.element('#first').to.be.selected;
    browser.expect.element('[for="second"').text.to.equal('Second Radio');
    browser.expect.element('[for="third"]').text.to.equal('Third Radio');
  },
});
