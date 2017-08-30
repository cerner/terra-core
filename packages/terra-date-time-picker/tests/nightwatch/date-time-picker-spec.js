/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const screenshot = require('terra-toolkit').screenshot;
// const DateTimeUtil = require('../../lib/DateTimeUtil').DateTimeUtil;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-date-time-picker', done);
  },

  'Displays the DateTimePicker with default props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/default`);

    browser.expect.element('[data-terra-date-time-input-hidden]').to.be.present;
    browser.expect.element('[data-terra-date-time-input-hidden]').to.have.attribute('value').which.equals('');
    browser.expect.element('input[name="terra-date-input"]').to.be.present;
    browser.expect.element('input[name="terra-date-input"]').to.have.attribute('placeholder').equals('MM/DD/YYYY');
    browser.expect.element('input[name="terra-date-input"]').to.have.attribute('value').equals('');
    browser.expect.element('input[name="terra-time-hour-input"]').to.be.present;
    browser.expect.element('input[name="terra-time-hour-input"]').to.have.attribute('placeholder').equals('hh');
    browser.expect.element('input[name="terra-time-hour-input"]').to.have.attribute('value').equals('');
    browser.expect.element('input[name="terra-time-minute-input"]').to.be.present;
    browser.expect.element('input[name="terra-time-minute-input"]').to.have.attribute('placeholder').equals('mm');
    browser.expect.element('input[name="terra-time-minute-input"]').to.have.attribute('value').equals('');
  },

  'Displays the DateTimePicker with a default date only': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/date-only`);

    browser.expect.element('[data-terra-date-time-input-hidden]').to.be.present;
    browser.expect.element('[data-terra-date-time-input-hidden]').to.have.attribute('value').which.contains('2017-08-08');
    browser.expect.element('input[name="terra-date-input"]').to.be.present;
    browser.expect.element('input[name="terra-date-input"]').to.have.attribute('placeholder').equals('MM/DD/YYYY');
    browser.expect.element('input[name="terra-date-input"]').to.have.attribute('value').equals('08/08/2017');
    browser.expect.element('input[name="terra-time-hour-input"]').to.be.present;
    browser.expect.element('input[name="terra-time-hour-input"]').to.have.attribute('placeholder').equals('hh');
    browser.expect.element('input[name="terra-time-hour-input"]').to.have.attribute('value').equals('');
    browser.expect.element('input[name="terra-time-minute-input"]').to.be.present;
    browser.expect.element('input[name="terra-time-minute-input"]').to.have.attribute('value').equals('');
  },

  'Displays the DateTimePicker with a default date and time': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/date-time`);

    browser.expect.element('[data-terra-date-time-input-hidden]').to.be.present;
    browser.expect.element('[data-terra-date-time-input-hidden]').to.have.attribute('value').which.contains('2017-08-08T10:30:00');
    browser.expect.element('input[name="terra-date-input"]').to.be.present;
    browser.expect.element('input[name="terra-date-input"]').to.have.attribute('placeholder').equals('MM/DD/YYYY');
    browser.expect.element('input[name="terra-date-input"]').to.have.attribute('value').equals('08/08/2017');
    browser.expect.element('input[name="terra-time-hour-input"]').to.be.present;
    browser.expect.element('input[name="terra-time-hour-input"]').to.have.attribute('placeholder').equals('hh');
    browser.expect.element('input[name="terra-time-hour-input"]').to.have.attribute('value').equals('10');
    browser.expect.element('input[name="terra-time-minute-input"]').to.be.present;
    browser.expect.element('input[name="terra-time-minute-input"]').to.have.attribute('value').equals('30');
  },

  'Displays the Time Clarification dialog': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/dst`);

    browser.expect.element('[class*="button-offset"]').to.not.be.present;

    browser.click('input[name="terra-time-hour-input"]');
    browser.click('input[name="terra-time-minute-input"]');
    browser.waitForElementVisible('[class*="time-clarification"]', 1000);

    browser.expect.element('[class*="time-clarification"]').to.be.present;
    browser.expect.element('[class*="header"]').to.be.present;
    browser.expect.element('[class*="title"]').text.to.equal('Time Clarification');
    browser.expect.element('[class*="body"]').to.be.present;
    browser.expect.element('[class*="body"] > p').text.to.equal('The time selected occurs during the transition from Daylight Saving Time to Standard Time. Would you like to enter this before or after the time change from Daylight Saving to Standard time?');
    browser.expect.element('[class*="button-daylight"]').to.be.present;
    browser.expect.element('[class*="button-standard"]').to.be.present;
  },

  'Dismisses the Time Clarification dialog': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/dst`);

    browser.expect.element('[class*="button-offset"]').to.not.be.present;

    browser.click('input[name="terra-time-hour-input"]');
    browser.click('input[name="terra-time-minute-input"]');
    browser.waitForElementVisible('[class*="time-clarification"]', 1000);

    browser.expect.element('[class*="time-clarification"]').to.be.present;

    browser.click('[class*="button-daylight"]');

    browser.expect.element('[class*="time-clarification"]').to.not.be.present;
  },

  'Displays the offset button after clicking the daylight button': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/dst`);

    browser.expect.element('[class*="button-offset"]').to.not.be.present;

    browser.click('input[name="terra-time-hour-input"]');
    browser.click('input[name="terra-time-minute-input"]');
    browser.waitForElementVisible('[class*="time-clarification"]', 1000);

    browser.expect.element('[class*="time-clarification"]').to.be.present;

    browser.click('[class*="button-daylight"]');

    browser.expect.element('[class*="time-clarification"]').to.not.be.present;
    browser.expect.element('[class*="button-offset"]').to.be.present;
    browser.expect.element('[class*="button-offset"]').text.to.not.equal('');
  },

  'Displays the offset button after clicking the standard time button': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/dst`);

    browser.expect.element('[class*="button-offset"]').to.not.be.present;

    browser.click('input[name="terra-time-hour-input"]');
    browser.click('input[name="terra-time-minute-input"]');
    browser.waitForElementVisible('[class*="time-clarification"]', 1000);

    browser.expect.element('[class*="time-clarification"]').to.be.present;

    browser.click('[class*="button-standard"]');

    browser.expect.element('[class*="time-clarification"]').to.not.be.present;
    browser.expect.element('[class*="button-offset"]').to.be.present;
    browser.expect.element('[class*="button-offset"]').text.to.not.equal('');
  },

  'Hides the offset button when the date/time is no longer ambiguous': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/dst`);

    browser.expect.element('[class*="button-offset"]').to.not.be.present;

    browser.click('input[name="terra-time-hour-input"]');
    browser.click('input[name="terra-time-minute-input"]');
    browser.waitForElementVisible('[class*="time-clarification"]', 1000);

    browser.expect.element('[class*="time-clarification"]').to.be.present;

    browser.click('[class*="button-standard"]');

    browser.expect.element('[class*="time-clarification"]').to.not.be.present;

    browser.expect.element('[class*="button-offset"]').to.be.present;
    browser.expect.element('[class*="button-offset"]').text.to.not.equal('');

    browser.setValue('input[name="terra-date-input"]', '11/06/2017');
    browser.click('input[name="terra-time-hour-input"]');

    browser.expect.element('[class*="button-offset"]').to.not.be.present;
  },

  'Displays the DatePicker with excluded dates being disabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/exclude-dates`);

    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').text.to.equal('14');
  },

  'Displays the DatePicker with filtered dates being disabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/filter-dates`);

    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').text.to.equal('30');
  },

  'Displays the DatePicker with include dates being enabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/include-dates`);

    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').text.to.not.equal('10');
  },

  'Displays the DatePicker inside the modal manager and dismisses after selecting a date': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/inside-modal`);

    browser.click('[class*="disclose"]');
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.click('.react-datepicker__today-button');

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Enter': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/inside-modal`);

    browser.click('[class*="disclose"]');
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.ENTER);

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Escape': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/inside-modal`);

    browser.click('[class*="disclose"]');
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.ESCAPE);

    browser.expect.element('.react-datepicker').to.not.be.present;

    browser.assert.elementPresent('div[role="document"]');

    browser.keys(browser.Keys.ESCAPE);

    browser.assert.elementNotPresent('div[role="document"]');
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Tab': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-time-picker-tests/inside-modal`);

    browser.click('[class*="disclose"]');
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.TAB);

    browser.expect.element('.react-datepicker').to.not.be.present;
  },
};
