/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays default option': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-select/select-option/default-select-option`);
    browser.expect.element('#defaultOption').text.to.equal('Default');
  },
  'Displays disabled option': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-select/select-option/disabled-select-option`);
    browser.expect.element('#disabledOption[class*="is-disabled"]').to.be.present;
  },
  'Displays selected option': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-select/select-option/selected-select-option`);
    browser.expect.element('#selectedOption[class*="is-selected"]').to.be.present;
  },
  'Displays option with long text wrapped': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/form-select/select-option/select-option-long-text`);
    browser.expect.element('#longTextOption').text.to.contain('Nulla gravida et.');
  },
});
