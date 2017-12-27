/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large'], {
  'Sets the fields appropriately for a morning time': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour-mobile`);

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('');
    browser.expect.element('#timeInput button[aria-pressed="true"]').text.to.equal('a.m.');
    browser.expect.element('#timeInput label[for="terra-time-hour-time-input"]').text.to.equal('Hours');
    browser.expect.element('#timeInput label[for="terra-time-minute-time-input"]').text.to.equal('Minutes');
  },
  'Sets the fields appropriately for an evening time': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour-mobile-time-provided`);

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('03');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('23');
    browser.expect.element('#timeInput button[aria-pressed="true"]').text.to.equal('p.m.');
    browser.expect.element('label[for="terra-time-hour-time-input"]').text.to.equal('Hours');
    browser.expect.element('label[for="terra-time-minute-time-input"]').text.to.equal('Minutes');
  },
  'Sets the correct for element on the labels when minutes and hours have ids attached': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour-mobile-ids`);

    browser.expect.element('label[for="hours-testing"]').text.to.equal('Hours');
    browser.expect.element('label[for="minutes-testing"]').text.to.equal('Minutes');
  },
  'Clicking the meridiem inputs updates the time': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour-mobile-time-provided`);

    browser.click('#timeInput button[aria-pressed="false"]');
    browser.expect.element('#timeInput button[aria-pressed="true"]').text.to.equal('a.m.');
    browser.expect.element('#time-input-value').text.to.contain('03:23');

    browser.click('#timeInput button[aria-pressed="false"]');
    browser.expect.element('#timeInput button[aria-pressed="true"]').text.to.equal('p.m.');
    browser.expect.element('#time-input-value').text.to.contain('15:23');
  },
});
