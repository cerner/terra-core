Terra.describeViewports('Native Select', ['tiny'], () => {
  describe('Default', () => {
    browser.url('/raw/tests/terra-form-select/form-select/native-select/default');

    it('should display default select', () => {
      Terra.validates.element('default');
    });

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover');
    });

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover-and-focus');
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/disabled'));

    it('should display disabled select', () => {
      Terra.validates.element('default');
    });

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover');
    });

    it('should not set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should not apply hover or focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover-and-focus');
    });
  });

  describe('Incomplete', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/incomplete'));

    it('should display incomplete select', () => {
      Terra.validates.element('default');
    });

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover');
    });

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover-and-focus');
    });
  });

  describe('Invalid', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/invalid'));

    it('should display invalid select', () => {
      Terra.validates.element('default');
    });

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover');
    });

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover-and-focus');
    });
  });

  describe('LongText', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/long-text'));

    it('should display select with long text', () => {
      Terra.validates.element('default');
    });

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover');
    });

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover-and-focus');
    });
  });

  describe('OptGroup', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/opt-group'));

    it('should display select with OptGroup', () => {
      Terra.validates.element('default');
    });

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover');
    });

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover-and-focus');
    });
  });

  describe('Filter Style', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/native-select/filter-style'));

    it('should display select with filter style', () => {
      Terra.validates.element('default');
    });

    it('should apply hover to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover');
    });

    it('should set focus to the select', () => {
      browser.click('#root', 0, 0);
      browser.keys('Tab');

      Terra.validates.element('focus');
    });

    it('should apply hover and focus to the select', () => {
      browser.moveToObject('#select-id', 5, 5);

      Terra.validates.element('hover-and-focus');
    });
  });
});
