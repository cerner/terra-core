const ignoredA11y = {
  'color-contrast': { enabled: false },
  label: { enabled: false },
};

describe('Date Picker', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default'));

    it('creates a hidden input and empty value attr. when no date is entered', () => {
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'name')).to.equal('date-input');
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'value')).to.equal('');
    });

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-date-input"]', '06/01/2017');
      browser.keys('Enter');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ selector: '[class="react-datepicker"]' });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Default Date Exlcuded', () => {
    describe('Default Date Excluded - Clears input using calendar icon', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-excluded'));

      Terra.should.matchScreenshot('default date displayed');
      it('clears the default date and time after clicking on calendar button', () => {
        browser.click('[class*="button"]');
      });
      Terra.should.matchScreenshot('default date cleared');
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Default Date Excluded - Clears input focusing on input box', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-excluded'));

      Terra.should.matchScreenshot('default date displayed');
      it('clears the default date and time after focusing on input box', () => {
        browser.click('input[name="terra-date-date-input"]');
        // Ensures the mouse pointer doesn't appear in the screenshot
        browser.click('h3');
      });
      Terra.should.matchScreenshot('default date cleared');
    });
  });

  describe('Default Date Out Of Range', () => {
    describe('Default Date Out Of Range - Clears input using calendar icon', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-out-of-range'));

      Terra.should.matchScreenshot('default date displayed');
      it('clears the default date and time after clicking on calendar button', () => {
        browser.click('[class*="button"]');
      });
      Terra.should.matchScreenshot('default date cleared');
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Default Date Out Of Range - Clears input focusing on input box', () => {
      before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-default-date-out-of-range'));

      Terra.should.matchScreenshot('default date displayed');
      it('clears the default date and time after focusing on input box', () => {
        browser.click('input[name="terra-date-date-input"]');
        // Ensures the mouse pointer doesn't appear in the screenshot
        browser.click('h3');
      });
      Terra.should.matchScreenshot('default date cleared');
    });
  });

  describe('Exclude Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-exclude-dates');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ selector: '[class="react-datepicker"]' });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Filter Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-filter-dates');
      browser.setValue('input[name="terra-date-date-input"]', '06/01/2017');
      browser.keys('Enter');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ selector: '[class="react-datepicker"]' });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Include Dates', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-include-dates');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ selector: '[class="react-datepicker"]' });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-disabled'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input[name="terra-date-date-input"]', '06/01/2017'))
        .to.throw('Element is not currently interactable and may not be manipulated');
    });

    it('should not accept mouse interaction', () => {
      expect(browser.click.bind(browser, '[class*="button"]')).to.throw(Error);
    });
  });

  describe('Read Only', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-read-only'));

    Terra.should.matchScreenshot('not clicked');
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input[name="terra-date-date-input"]', '06/01/2017')).to.throw(Error);
    });

    it('should not open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot('clicked');
  });

  describe('Inside Modal', () => {
    describe('Inside Modal - Displays DatePicker inside Modal and dismisses after selecting date', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-inside-modal');
        browser.click('[class*="disclose"]');
      });

      it('opens DatePicker in modal', () => {
        browser.setValue('input[name="terra-date-date-picker-in-modal"]', '06/01/2017');
        browser.keys('Enter');
        browser.click('[class*="custom-input"] > [class*="button"]');
      });
      Terra.should.matchScreenshot('DatePicker open', { selector: 'div[class="content-container"]' });

      it('closes DatePicker in modal', () => {
        browser.click('div[class*="selected"]');
      });
      Terra.should.matchScreenshot('DatePicker closed', { selector: 'div[class="content-container"]' });
      Terra.should.beAccessible({ rules: ignoredA11y });
    });

    describe('Inside Modal - Displays DatePicker inside Modal and dismisses after hitting Enter', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-inside-modal');
        browser.click('[class*="disclose"]');
      });

      it('opens DatePicker in modal', () => {
        browser.setValue('input[name="terra-date-date-picker-in-modal"]', '06/01/2017');
        browser.keys('Enter');
        browser.click('[class*="custom-input"] > [class*="button"]');
      });
      Terra.should.matchScreenshot('DatePicker open', { selector: 'div[class="content-container"]' });

      it('closes DatePicker in modal', () => {
        browser.keys('Enter');
      });
      Terra.should.matchScreenshot('DatePicker closed', { selector: 'div[class="content-container"]' });
    });

    describe('Inside Modal - Displays DatePicker inside Modal and dismisses after hitting Escape', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-inside-modal');
        browser.click('[class*="disclose"]');
      });

      it('opens DatePicker in modal', () => {
        browser.setValue('input[name="terra-date-date-picker-in-modal"]', '06/01/2017');
        browser.keys('Enter');
        browser.click('[class*="custom-input"] > [class*="button"]');
      });
      Terra.should.matchScreenshot('DatePicker open', { selector: 'div[class="content-container"]' });

      it('closes DatePicker in modal', () => {
        browser.keys('Escape');
      });
      Terra.should.matchScreenshot('DatePicker closed', { selector: 'div[class="content-container"]' });

      it('closes the modal', () => {
        browser.keys('Escape');
      });
      Terra.should.matchScreenshot('Modal closed');
    });

    describe('Inside Modal - Displays DatePicker inside Modal and dismisses after hitting Tab', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-inside-modal');
        browser.click('[class*="disclose"]');
      });

      it('opens DatePicker in modal', () => {
        browser.setValue('input[name="terra-date-date-picker-in-modal"]', '06/01/2017');
        browser.keys('Enter');
        browser.click('[class*="custom-input"] > [class*="button"]');
      });
      Terra.should.matchScreenshot('DatePicker open', { selector: 'div[class="content-container"]' });

      it('closes DatePicker in modal', () => {
        browser.keys('Tab');
      });
      Terra.should.matchScreenshot('DatePicker closed', { selector: 'div[class="content-container"]' });
    });
  });

  describe('Min Max', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-min-max');
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot({ selector: '[class="react-datepicker"]' });
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-change'));

    it('sets the date', () => {
      browser.setValue('input[name="terra-date-date-input-onchange"]', '06/01/2017');
      browser.keys('Enter');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.should.matchScreenshot('date set');

    it('clears the date', () => {
      browser.click('input[name="terra-date-date-input-onchange"]');
      // Manually clear the date input -- clearValue command successfully clears the input value,
      // however chromedriver does not trigger the change event.
      for (let i = 0; i < 8; i += 1) {
        browser.keys('Backspace');
      }
      // The date extends past the center of the element so the cursor must be repositioned to remove everything
      browser.click('input[name="terra-date-date-input-onchange"]');
      browser.keys('Backspace');
      browser.keys('Backspace');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.should.matchScreenshot('no date set');
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('On Change Raw', () => {
    before(() => browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-change-raw'));

    it('partially sets the date', () => {
      browser.setValue('input[name="terra-date-date-input-onchangeraw"]', '06/01');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.should.matchScreenshot('date set to 06-01');

    it('finishes setting the date', () => {
      browser.addValue('input[name="terra-date-date-input-onchangeraw"]', '/2017');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.should.matchScreenshot('date set to 06-01-2017');
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('On Click Outside', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-click-outside');
      browser.click('[class*="button"]');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });

    it('dismisses the datepicker after clicking outside', () => {
      browser.click('input[name="terra-date-date-input-onclickoutside"]');
    });

    Terra.should.matchScreenshot('date picker closed with dismissal message');
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('On Select', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-on-select');
    });

    it('enters a date through input', () => {
      browser.setValue('input[name="terra-date-date-input-onselect"]', '06/01/2017');
      // Ensures the mouse pointer doesn't appear in the screenshot
      browser.click('h3');
    });
    Terra.should.matchScreenshot('Selected date not displayed');

    it('selects a date through date picker', () => {
      browser.click('[class*="button"]');
      browser.click('div[class*="selected"]');
    });
    Terra.should.matchScreenshot('Selected date displayed');
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Start Date', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-date-picker/date-picker/date-picker-start-date');
    });

    it('creates a hidden input with default name attr. and sets value in ISO8601 when a valid date is entered', () => {
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'name')).to.equal('date-input');
      expect(browser.getAttribute('[data-terra-date-input-hidden]', 'value')).to.equal('2017-04-01');
    });
    Terra.should.matchScreenshot();
    Terra.should.beAccessible({ rules: ignoredA11y });
  });
});
