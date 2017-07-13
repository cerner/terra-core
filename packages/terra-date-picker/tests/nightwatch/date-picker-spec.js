/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-disable no-unused-expressions*/
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

  'Creates a hidden input with a name atribute of "date-input" and an empty value attribute when no date is entered': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/default`);

    browser.expect.element('.terra-hidden-date-input').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('.terra-hidden-date-input').to.have.attribute('value').which.equals('');
  },

  'Creates a hidden input with a default name atribute of "date-input" and sets the value in ISO8601 format when a valid date is entered': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/start-date`);

    browser.expect.element('.terra-hidden-date-input').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('.terra-hidden-date-input').to.have.attribute('value').which.equals('2017-04-01');
  },

  'Creates a hidden input and sets the value attribute as is when an invalid date is entered': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/default`);

    browser.click('.terra-DatePicker-input');
    browser.keys('2017');

    browser.expect.element('.terra-hidden-date-input').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('.terra-hidden-date-input').to.have.attribute('value').which.equals('2017');
  },

  'Displays the calendar button with a height that matches the input ': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/default`);

    browser.getCssProperty('.terra-DatePicker-input', 'height', (inputResult) => {
      browser.getCssProperty('.terra-DatePicker-button', 'height', (buttonResult) => {
        browser.assert.equal(Math.round(parseFloat(inputResult.value)), Math.round(parseFloat(buttonResult.value)));
      });
    });
  },

  'Triggers onChange when a date value is cleared': (browser) => {
    browser.url(`http://localhost:${browser.globals.webpackDevServerPort}/#/tests/date-picker-tests/on-change`);

    browser.setValue('input[name="terra-date-date-input-onchange"]', '07/12/2017');
    browser.expect.element('h3').text.to.contain('2017-07-12');

    browser.clearValue('input[name="terra-date-date-input-onchange"]');
    browser.expect.element('h3').text.to.not.contain('2017-07-12');
  },
};
