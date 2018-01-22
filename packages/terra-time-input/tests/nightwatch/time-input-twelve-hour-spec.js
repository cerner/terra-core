/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'huge'], {
  'Sets the fields appropriately for a morning time': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour-filled-morning`);

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('09');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('22');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('a.m.');
  },
  'Sets the fields appropriately for an evening time': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour-filled-evening`);

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('09');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('22');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },
  'Meridiem input switches to a.m. when up is pressed on the meridiem input': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[value="a.m."]');
    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('a.m.');
  },

  'Meridiem input switches to p.m. when down is pressed on the meridiem input': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[value="a.m."]');
    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },

  'Time input accepts valid time entry and jumps to the meridiem input when the hour input has a valid entry': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-minute-time-input"]');

    browser.keys('34p');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('34');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },

  'Time input accepts valid time entry and jumps to the meridien input when the entire input has a valid entry': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('1234p');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('34');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },

  'Time input sets the hour to 12 without changing meridiem when 00 is typed in for the hours section': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('00');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('a.m.');
  },

  'Time input sets the hour to 12 without changing meridiem when 00 is typed in for the entire input': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('0012p');
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },

  'Time input sets the hour to 12 without changing meridiem when up is pressed on the hour input': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('a.m.');
  },

  'Time input is set to 01 when up is pressed on the hour input with a value of 12': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('12');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('01');
  },

  'Time input is set to 12 when down is pressed on the hour input with a value of 01': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('01');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys(browser.Keys.DOWN_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
  },

  'Time input is set to 12 and meridiem is switched when up is pressed and hour is 11': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('11');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys(browser.Keys.UP_ARROW);
    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('12');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },

  'Time input sets the hour to 11 and changes the meridiem when down is pressed and hour is 12': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('12');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys(browser.Keys.DOWN_ARROW);

    browser.expect.element('#timeInput input[name="terra-time-hour-time-input"]').to.have.attribute('value').equals('11');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },

  'Sets time to 12 for onBlur focus change when value is 0': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[name="terra-time-hour-time-input"]');
    browser.keys('730p');
    browser.click('#timeInput input[name="terra-time-hour-time-input"]');

    browser.keys('0');
    browser.keys(browser.Keys.TAB);

    browser.assert.containsText('#time-input-value', '12:30');
  },

  'Toggles to the minute input when left is pressed from the meridiem input': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[value="a.m."]');
    browser.keys(browser.Keys.LEFT_ARROW);
    browser.keys('34p');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('34');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },
  'Toggles to the minute input when backspace is pressed from the meridiem input': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/time-input-tests/twelve-hour`);

    browser.click('#timeInput input[value="a.m."]');

    browser.keys(browser.Keys.BACK_SPACE);
    browser.keys('34p');
    browser.expect.element('#timeInput input[name="terra-time-minute-time-input"]').to.have.attribute('value').equals('34');
    browser.expect.element('#timeInput select[name="terra-time-meridiem-time-input"]').to.have.attribute('value').equals('p.m.');
  },
});
