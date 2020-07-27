Terra.describeViewports('Native Select', ['tiny'], () => {
  describe('Default', () => {
    browser.url('/raw/tests/terra-form-select/form-select/native-select/default');

    Terra.it.validatesElement('initial');

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover');

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus');

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover-and-focus');
  });

  describe('Disabled', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/disabled'));

    Terra.it.validatesElement('initial');

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover');

    it('should not set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus');

    it('should not apply hover or focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover-and-focus');
  });

  describe('Incomplete', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/incomplete'));

    Terra.it.validatesElement('initial');

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover');

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus');

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover-and-focus');
  });

  describe('Invalid', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/invalid'));

    Terra.it.validatesElement('initial');

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover');

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus');

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover-and-focus');
  });

  describe('LongText', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/long-text'));

    Terra.it.validatesElement('initial');

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover');

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus');

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover-and-focus');
  });

  describe('OptGroup', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/opt-group'));

    Terra.it.validatesElement('initial');

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover');

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus');

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover-and-focus');
  });

  describe('Filter Style', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/filter-style'));

    Terra.it.validatesElement('initial');

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover');

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus');

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);
    });

    Terra.it.validatesElement('hover-and-focus');
  });
});
