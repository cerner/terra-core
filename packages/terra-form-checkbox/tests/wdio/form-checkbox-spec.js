Terra.describeViewports('Checkbox', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox/default-checkbox'));

    it('should display default Checkbox', () => {
      Terra.validates.element('default');
    });

    it('should hover on Checkbox', () => {
      $('#default').moveTo();

      Terra.validates.element('hover');
    });

    it('should display focus on Checkbox', () => {
      $('#root').moveTo({ xOffset: 0, yOffset: 0 });
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should display checked Checkbox', () => {
      $('#default').waitForDisplayed();
      $('[for="default"]').click();
      $('#site').click();

      Terra.validates.element('checked');
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox/disabled-checkbox'));

    it('should display disabled Checkbox', () => {
      Terra.validates.element('disabled');
    });

    it('should hover on disabled Checkbox', () => {
      $('#disabled').moveTo();

      Terra.validates.element('disabled hover');
    });
  });

  it('should display Checkbox with hidden label', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox/hidden-label-checkbox');

    Terra.validates.element('hidden label');
  });

  it('should display populated Checkbox', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox/populated-checkbox');

    Terra.validates.element('populated');
  });

  it('should display Checkbox with long text', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox/long-text-checkbox');

    Terra.validates.element('long text');
  });

  it('should display three Checkboxes, first defaulted to checked', () => {
    browser.url('/raw/tests/terra-form-checkbox/form-checkbox/checkbox/multiple-checkboxes');

    Terra.validates.element('three Checkboxes, first defaulted to checked');
  });
});
