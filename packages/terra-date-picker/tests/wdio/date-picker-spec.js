/* global browser, before, Terra */

const ignoredA11y = {
  'color-contrast': { enabled: false },
  label: { enabled: false },
};

describe('Date Picker', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

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
      expect(browser.setValue.bind(browser, 'input[name="terra-date-date-input"]', '06/01/2017'))
        .to.throw('Element must be user-editable in order to clear it.');
    });

    it('should not open the date picker', () => {
      browser.click('[class*="button"]');
    });

    Terra.should.matchScreenshot('clicked');
  });
});
