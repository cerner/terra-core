/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['tiny', 'small', 'medium', 'large', 'huge', 'enormous'], {
  'Displays the DatePicker with defaulted props': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/default`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').to.be.present;
    browser.expect.element('.react-datepicker__month-dropdown-container--select').to.be.present;
    browser.expect.element('.react-datepicker__year-dropdown-container--select').to.be.present;
  },

  'Displays the DatePicker with excluded dates being disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/exclude-dates`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with filtered dates being disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/filter-dates`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with include dates being enabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/include-dates`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.not.be.present;
  },

  'Displays the DatePicker with min and max dates': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/min-max`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.not.be.present;
  },

  'Creates a hidden input with a name atribute of "date-input" and an empty value attribute when no date is entered': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/default`);
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('value').which.equals('');
  },

  'Creates a hidden input with a default name atribute of "date-input" and sets the value in ISO8601 format when a valid date is entered': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/start-date`);
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('value').which.equals('2017-04-01');
  },

  'Creates a hidden input and sets the value attribute as is when an invalid date is entered': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/default`);
    browser.click('[name="terra-date-date-input"]');
    browser.keys('2017');

    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('value').which.equals('2017');
  },

  'Displays the calendar button with a height that matches the input ': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/default`);

    browser.getCssProperty('[name="terra-date-date-input"]', 'height', (inputResult) => {
      browser.getCssProperty('[class*="button"]', 'height', (buttonResult) => {
        browser.assert.equal(Math.round(parseFloat(inputResult.value)), Math.round(parseFloat(buttonResult.value)));
      });
    });
  },

  'Triggers onChange when a date value is cleared': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/on-change`);

    browser.setValue('input[name="terra-date-date-input-onchange"]', '07/12/2017');
    browser.expect.element('h3').text.to.contain('2017-07-12');

    // Manually clear the date input -- clearValue command successfully clears the input value,
    // however chromedriver does not trigger the change event.
    for (let i = 0; i < 10; i += 1) {
      browser.keys(browser.Keys.BACK_SPACE);
    }

    browser.expect.element('input[name="terra-date-date-input-onchange"]').to.have.value.that.equals('');
    browser.expect.element('input[name="terra-date-date-input-onchange"]').to.have.text.to.equals('');
    browser.expect.element('h3').text.to.not.contain('2017-07-12');
  },

  'Displays the DatePicker inside the modal manager and dismisses after selecting a date': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/inside-modal`);

    browser.click('[class*="disclose"]');
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.click('.react-datepicker__today-button');

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/inside-modal`);

    browser.click('[class*="disclose"]');
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.ENTER);

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Escape': (browser) => {
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/inside-modal`);

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
    browser.url(`${browser.launchUrl}/#/tests/date-picker-tests/inside-modal`);

    browser.click('[class*="disclose"]');
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.TAB);

    browser.expect.element('.react-datepicker').to.not.be.present;
  },
});
