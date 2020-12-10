Terra.describeViewports('Form-Input', ['tiny', 'large'], () => {
  it('should display valid Form Input', () => {
    browser.url('/raw/tests/terra-form-input/form-input/default-form-input');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('valid');
  });

  it('should display invalid Form Input', () => {
    browser.url('/raw/tests/terra-form-input/form-input/invalid-form-input');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('incomplete');
  });

  it('should display incomplete Form Input', () => {
    browser.url('/raw/tests/terra-form-input/form-input/incomplete-form-input');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('invalid');
  });

  it('should display invalid Form Input with incomplete', () => {
    browser.url('/raw/tests/terra-form-input/form-input/invalid-with-incomplete-form-input');
    browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

    Terra.validates.element('invalid with incomplete');
  });

  describe('Enabled', () => {
    it('should display enabled Form Input non-selected', () => {
      browser.url('/raw/tests/terra-form-input/form-input/default-form-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('non-selected');
    });

    it('should display enabled Form Input hovered', () => {
      browser.url('/raw/tests/terra-form-input/form-input/default-form-input');
      browser.moveToObject('input');

      Terra.validates.element('hovered');
    });

    it('should display enabled Form Input with value', () => {
      browser.url('/raw/tests/terra-form-input/form-input/value-form-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('value');
    });

    it('should display enabled Form Input keyboard-focused', () => {
      browser.url('/raw/tests/terra-form-input/form-input/default-form-input');
      browser.keys('Tab');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('keyboard-focused');
    });
  });

  describe('Disabled', () => {
    it('should display disabled form Input non-selected', () => {
      browser.url('/raw/tests/terra-form-input/form-input/disabled-form-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('non-selected');
    });

    it('should display disabled Form Input with value', () => {
      browser.url('/raw/tests/terra-form-input/form-input/disabled-value-input');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('value');
    });

    it('should display disabled Form Input hovered', () => {
      browser.url('/raw/tests/terra-form-input/form-input/disabled-form-input');
      browser.moveToObject('input');

      Terra.validates.element('hovered');
    });

    it('should display disabled Form Input keyboard-focused', () => {
      before(() => {
        browser.url('/raw/tests/terra-form-input/form-input/disabled-form-input');
        browser.keys('Tab');
        browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles
      });

      Terra.validates.element('keyboard-focused');
    });
  });

  describe('InputField', () => {
    it('should display resized InputField', () => {
      browser.url('/raw/tests/terra-form-input/form-input/input-field-width');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('resized');
    });

    it('should display valid InputField', () => {
      browser.url('/raw/tests/terra-form-input/form-input/input-field');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('valid');
    });

    it('should display invalid InputField', () => {
      browser.url('/raw/tests/terra-form-input/form-input/input-field');
      browser.click('#validity-toggle');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('invalid');
    });

    it('should display incomplete InputField', () => {
      browser.url('/raw/tests/terra-form-input/form-input/input-field');
      browser.click('#incomplete-toggle');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('incomplete');
    });

    it('should display disabled InputField', () => {
      browser.url('/raw/tests/terra-form-input/form-input/disabled-input-field');
      browser.moveToObject('#root', 0, 700); // add to ensure consistent hover styles

      Terra.validates.element('disabled');
    });
  });
});

Terra.describeViewports('Form-Input', ['large'], () => {
  describe('Setting Value', () => {
    before(() => browser.url('/raw/tests/terra-form-input/form-input/setting-value-input'));

    it('should display empty Form Input', () => {
      Terra.validates.element('empty');
    });

    it('should trigger onInput when programmatically setting value', () => {
      browser.click('#input-set-text-button');

      Terra.validates.element('programmatically');
    });
  });
});
