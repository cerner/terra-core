/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays default option': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-option-tests/default`);
    browser.expect.element('#defaultOption').text.to.equal('Default');
  },
  'Displays disabled option': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-option-tests/disabled`);
    browser.expect.element('#disabledOption[class*="is-disabled"]').to.be.present;
  },
  'Displays selected option': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-option-tests/selected`);
    browser.expect.element('#selectedOption[class*="is-selected"]').to.be.present;
  },
  'Displays option with long text wrapped': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-option-tests/long-text`);
    browser.expect.element('#longTextOption').text.to.contain('Nulla gravida et.');
  },
});
