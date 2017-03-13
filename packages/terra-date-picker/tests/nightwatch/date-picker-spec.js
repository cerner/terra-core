/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions */

const screenshot = require('terra-toolkit').screenshot;

module.exports = {
  afterEach: (browser, done) => {
    screenshot(browser, done);
  },

  'Displays the DatePicker with defaulted props': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/default`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').to.be.present;
    browser.expect.element('.react-datepicker__month-dropdown-container--select').to.be.present;
    browser.expect.element('.react-datepicker__year-dropdown-container--select').to.be.present;
  },

  'Displays the DatePicker with a custom input. Clicking the input does not open the date picker': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/custom-input`);

    browser.click('.terra-DatePicker-custom-input');

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Displays the DatePicker with a custom input. Clicking the calendar button opens the date picker': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/custom-input`);

    browser.click('.terra-DatePicker-custom-button');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').to.be.present;
    browser.expect.element('.react-datepicker__month-dropdown-container--select').to.be.present;
    browser.expect.element('.react-datepicker__year-dropdown-container--select').to.be.present;
  },

  'Displays the DatePicker with excluded dates being disabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/exclude-dates`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with filtered dates being disabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/filter-dates`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with the month and year dropdowns hidden': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/hide-month-year-dropdown`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__current-month').to.be.present;
    browser.expect.element('.react-datepicker__month-dropdown-container--select').to.not.be.present;
    browser.expect.element('.react-datepicker__year-dropdown-container--select').to.not.be.present;
  },

  'Displays the DatePicker with the Today button hidden': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/hide-today-button`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').to.not.be.present;
  },

  'Displays the DatePicker with highlighted dates': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/highlight-dates`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--highlighted').to.be.present;
  },

  'Displays the DatePicker with include dates being enabled': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/include-dates`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.be.enabled;
  },

  'Displays the DatePicker with min and max dates': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/min-max`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.be.enabled;
  },

  'Displays the DatePicker with the Today button': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/today-button`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').text.to.equal('Click to set today\'s date');
  },

  'Displays the DatePicker with a date range': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/date-range`);

    browser.click('.terra-DatePicker-input');

    browser.expect.element('.terra-DatePicker-range').to.be.present;
    browser.expect.element('.terra-DatePicker-range > .terra-DatePicker').to.be.present;
  },

};

