/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions, prefer-arrow-callback */
const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  before: (browser, done) => {
    browser.resizeWindow(browser.globals.width, browser.globals.height, done);
  },

  afterEach: (browser, done) => {
    screenshot(browser, 'terra-date-picker', done);
  },

  'Displays the DatePicker with defaulted props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/default`);

    browser.click('.terra-DatePicker-button');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').to.be.present;
    browser.expect.element('.react-datepicker__month-dropdown-container--select').to.be.present;
    browser.expect.element('.react-datepicker__year-dropdown-container--select').to.be.present;
  },

  'Displays the DatePicker with excluded dates being disabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/exclude-dates`);

    browser.click('.terra-DatePicker-button');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with filtered dates being disabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/filter-dates`);

    browser.click('.terra-DatePicker-button');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with include dates being enabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/include-dates`);

    browser.click('.terra-DatePicker-button');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.not.be.present;
  },

  'Displays the DatePicker with min and max dates': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/min-max`);

    browser.click('.terra-DatePicker-button');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.not.be.present;
  },

  'Displays the DatePicker with a date range': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/date-range`);

    browser.click('.terra-DatePicker-button');

    browser.expect.element('.terra-DatePicker-range').to.be.present;
    browser.expect.element('.terra-DatePicker-range > .terra-DatePicker').to.be.present;
  },

  'Displays the calendar button with a height that matches the input ': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/default`);

    let inputHeight;

    browser.getElementSize('.terra-DatePicker-input', function getHeight(result) {
      inputHeight = result.value.height;
    });

    browser.getElementSize('.terra-DatePicker-button', function getHeight(result) {
      this.assert.equal(result.value.height, inputHeight);
    });
  },
};

