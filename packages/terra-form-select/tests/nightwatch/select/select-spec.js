/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays a default select': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/default`);
    browser.expect.element('#defaultSelect').to.be.present;
  },
  'Displays default placeholder text when no initial value is given': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/default`);
    browser.expect.element('#defaultSelect div[class*="default-option"]').text.to.equal('- Select -');
  },
  'Displays selected value in input and closes menu': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/default`);
    browser.click('#defaultSelect');
    browser.expect.element('div[class*="select-menu"]').to.be.present;
    browser.click('#kittens');
    browser.expect.element('div[class*="select-menu"]').to.not.be.present;
    browser.expect.element('#defaultSelect').text.to.equal('Kittens');
    browser.click('#defaultSelect');
    browser.expect.element('#kittens').to.have.attribute('class').which.contains('is-selected');
  },
  'Does not allow selection of a disabled option': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/default`);
    browser.click('#defaultSelect');
    browser.expect.element('div[class*="select-menu"]').to.be.present;
    browser.click('#disabledOption');
    browser.expect.element('div[class*="select-menu"]').to.be.present;
    browser.expect.element('#defaultSelect').text.to.equal('- Select -');
  },
  'When select is closed, will update selection when user enters characters if there is a matching option': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/default`);
    browser.sendKeys('#defaultSelect', 'p');
    browser.expect.element('#defaultSelect').text.to.equal('Puppies');
  },
  'When select is closed, will not update selection when user enters characters that has no matching option': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/default`);
    browser.sendKeys('#defaultSelect', 'i');
    browser.expect.element('#defaultSelect').text.to.equal('- Select -');
  },
  'Displays initial value selected is set on an option': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/disabled`);
    browser.expect.element('#disabledSelect').text.to.equal('Kittens');
  },
  'Allows selection in controlled select': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/controlled`);
    browser.click('#controlledSelect');
    browser.expect.element('div[class*="select-menu"]').to.be.present;
    browser.click('#kittens');
    browser.expect.element('div[class*="select-menu"]').to.not.be.present;
    browser.expect.element('#controlledSelect').text.to.equal('Kittens');
    browser.click('#controlledSelect');
    browser.expect.element('#kittens').to.have.attribute('class').which.contains('is-selected');
  },
  'Allows initial value controlled select': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/controlled`);
    browser.expect.element('#controlledSelect').text.to.equal('Puppies');
  },
  'Displays disabled select': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/disabled`);
    browser.click('#disabledSelect');
    browser.expect.element('div[class*="select-menu"]').to.not.be.present;
  },
  'Displays select with truncated text when appropriate': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/long-text`);
    browser.expect.element('#longTextSelect').text.to.contain('Lorem ipsum');
  },
  'Displays invalid select': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/select-tests/invalid`);
    browser.expect.element('#invalidSelect').to.have.attribute('class').which.contains('invalid');
  },
});
