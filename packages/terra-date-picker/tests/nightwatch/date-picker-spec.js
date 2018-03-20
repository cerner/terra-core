/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-extraneous-dependencies
const resizeTo = require('terra-toolkit/lib/nightwatch/responsive-helpers').resizeTo;

module.exports = resizeTo(['medium'], {
  'Displays the DatePicker with defaulted props': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker > .react-datepicker__today-button').to.be.present;
    browser.expect.element('.react-datepicker__month-dropdown-container--select').to.be.present;
    browser.expect.element('.react-datepicker__year-dropdown-container--select').to.be.present;
  },

  'Displays the DatePicker with excluded dates being disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-exclude-dates`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with filtered dates being disabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-filter-dates`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--disabled').to.be.present;
  },

  'Displays the DatePicker with include dates being enabled': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-include-dates`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.not.be.present;
  },

  'Displays the DatePicker with min and max dates': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-min-max`);
    browser.click('[class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;
    browser.expect.element('.react-datepicker__day--today').to.not.be.present;
  },

  'Creates a hidden input with a name atribute of "date-input" and an empty value attribute when no date is entered': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default`);
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('value').which.equals('');
  },

  'Creates a hidden input with a default name atribute of "date-input" and sets the value in ISO8601 format when a valid date is entered': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-start-date`);
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('value').which.equals('2017-04-01');
  },

  'Creates a hidden input and sets the value attribute as is when an invalid date is entered': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default`);
    browser.click('[name="terra-date-date-input"]');
    browser.keys('2017');

    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('name').which.equals('date-input');
    browser.expect.element('[data-terra-date-input-hidden]').to.have.attribute('value').which.equals('2017');
  },

  'Displays the calendar button with a height that matches the input ': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default`);

    browser.getCssProperty('[name="terra-date-date-input"]', 'height', (inputResult) => {
      browser.getCssProperty('[class*="button"]', 'height', (buttonResult) => {
        browser.assert.equal(Math.round(parseFloat(inputResult.value)), Math.round(parseFloat(buttonResult.value)));
      });
    });
  },

  'Triggers onChange when a date value is cleared': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-on-change`);

    browser.setValue('input[name="terra-date-date-input-onchange"]', '07/12/2017');
    browser.expect.element('#selected-date').text.to.contain('2017-07-12');

    // Manually clear the date input -- clearValue command successfully clears the input value,
    // however chromedriver does not trigger the change event.
    for (let i = 0; i < 10; i += 1) {
      browser.keys(browser.Keys.BACK_SPACE);
    }

    browser.expect.element('input[name="terra-date-date-input-onchange"]').to.have.value.that.equals('');
    browser.expect.element('input[name="terra-date-date-input-onchange"]').to.have.text.to.equals('');
    browser.expect.element('#selected-date').text.to.not.contain('2017-07-12');
  },

  'Triggers onChangeRaw when a date input value is changed': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-on-change-raw`);

    browser.setValue('input[name="terra-date-date-input-onchangeraw"]', '07/12');
    browser.expect.element('#selected-date').text.to.contain('07/12');

    browser.setValue('input[name="terra-date-date-input-onchangeraw"]', '/2017');
    browser.expect.element('#selected-date').text.to.contain('07/12/2017');
  },

  'Triggers onSelect when a date is selected from the picker': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-on-select`);

    browser.setValue('input[name="terra-date-date-input-onselect"]', '07/12/2017');
    browser.expect.element('#selected-date').text.to.not.contain('2017-07-12');

    browser.click('[class*="button"]');
    browser.waitForElementVisible('.react-datepicker', 1000);
    browser.click('.react-datepicker__day--selected');

    browser.expect.element('#selected-date').text.to.contain('2017-07-12');
  },

  'Triggers onClickOutside when clicking outside of the picker to dismiss it': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-on-click-outside`);

    browser.windowSize('width', (result) => {
      if (result.value.width > browser.globals.breakpoints.small[0]) {
        browser.click('[class*="button"]');
        browser.waitForElementVisible('.react-datepicker', 1000);
        browser.click('input[name="terra-date-date-input-onclickoutside"]');

        browser.expect.element('#message').text.to.contain('Picker is dismissed after clicking outside');
      }
    });
  },

  'Displays the DatePicker inside the modal manager and dismisses after selecting a date': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-inside-modal`);

    browser.click('[class*="disclose"]');
    browser.expect.element('[class*="custom-input"] > [class*="button"]').to.be.present;
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.click('.react-datepicker__today-button');

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Enter': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-inside-modal`);

    browser.click('[class*="disclose"]');
    browser.expect.element('[class*="custom-input"] > [class*="button"]').to.be.present;
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.ENTER);

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Escape': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-inside-modal`);

    browser.click('[class*="disclose"]');
    browser.expect.element('[class*="custom-input"] > [class*="button"]').to.be.present;
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.ESCAPE);

    browser.expect.element('.react-datepicker').to.not.be.present;

    browser.assert.elementPresent('div[role="document"]');

    browser.keys(browser.Keys.ESCAPE);

    browser.assert.elementNotPresent('div[role="document"]');
  },

  'Displays the DatePicker inside the modal manager and dismisses when hitting Tab': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-inside-modal`);

    browser.click('[class*="disclose"]');
    browser.expect.element('[class*="custom-input"] > [class*="button"]').to.be.present;
    browser.click('[class*="custom-input"] > [class*="button"]');

    browser.expect.element('.react-datepicker').to.be.present;

    browser.keys(browser.Keys.TAB);

    browser.expect.element('.react-datepicker').to.not.be.present;
  },

  'Clears the default date and time on calendar button click when the default date is excluded': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default-date-excluded`);

    browser.click('[class*="button"]');
    browser.expect.element('input[name="terra-date-date-input"]').to.have.attribute('value').equals('');
  },

  'Clears the default date and time on date input focus when the default date is excluded': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default-date-excluded`);

    browser.click('input[name="terra-date-date-input"]');
    browser.expect.element('input[name="terra-date-date-input"]').to.have.attribute('value').equals('');
  },

  'Clears the default date and time on calendar button click when the default date is out of range': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default-date-out-of-range`);

    browser.click('[class*="button"]');
    browser.expect.element('input[name="terra-date-date-input"]').to.have.attribute('value').equals('');
  },

  'Clears the default date and time on date input focus when the default date is out of range': (browser) => {
    browser.url(`${browser.launchUrl}/#/raw/tests/date-picker/date-picker-default-date-out-of-range`);

    browser.click('input[name="terra-date-date-input"]');
    browser.expect.element('input[name="terra-date-date-input"]').to.have.attribute('value').equals('');
  },
});
