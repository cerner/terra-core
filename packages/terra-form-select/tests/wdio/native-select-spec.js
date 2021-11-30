Terra.describeViewports('Native Select', ['tiny'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/default'));

    it('should display default select', () => {
      Terra.validates.element('default display');
    });

    it('should apply hover to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('default hover');
    });

    it('should set focus to the select', () => {
      $('#root').click({ x: 0, y: 0 });
      browser.keys('Tab');

      Terra.validates.element('default focus');
    });

    it('should apply hover and focus to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('default-hover-and-focus');
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/disabled'));

    it('should display disabled select', () => {
      Terra.validates.element('disabled displayed');
    });

    it('should apply hover to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('disabled hover');
    });

    it('should not set focus to the select', () => {
      $('#root').click({ x: 0, y: 0 });
      browser.keys('Tab');

      Terra.validates.element('disabled focus');
    });

    it('should not apply hover or focus to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('disabled-hover-and-focus');
    });
  });

  describe('Incomplete', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/incomplete'));

    it('should display incomplete select', () => {
      Terra.validates.element('incomplete displayed');
    });

    it('should apply hover to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('incomplete hover');
    });

    it('should set focus to the select', () => {
      $('#root').click({ x: 0, y: 0 });
      browser.keys('Tab');

      Terra.validates.element('incomplete focus');
    });

    it('should apply hover and focus to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('incomplete-hover-and-focus');
    });
  });

  describe('Invalid', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/invalid'));

    it('should display invalid select', () => {
      Terra.validates.element('invalid displayed');
    });

    it('should apply hover to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('invalid hover');
    });

    it('should set focus to the select', () => {
      $('#root').click({ x: 0, y: 0 });
      browser.keys('Tab');

      Terra.validates.element('invalid focus');
    });

    it('should apply hover and focus to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('invalid-hover-and-focus');
    });
  });

  describe('LongText', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/long-text'));

    it('should display select with long text', () => {
      Terra.validates.element('long-text-displayed');
    });

    it('should apply hover to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('long-text-hover');
    });

    it('should set focus to the select', () => {
      $('#root').click({ x: 0, y: 0 });
      browser.keys('Tab');

      Terra.validates.element('long-text-focus');
    });

    it('should apply hover and focus to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('long-text-hover-and-focus');
    });
  });

  describe('OptGroup', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/opt-group'));

    it('should display select with OptGroup', () => {
      Terra.validates.element('opt-group-displayed');
    });

    it('should apply hover to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('opt-group-hover');
    });

    it('should set focus to the select', () => {
      $('#root').click({ x: 0, y: 0 });
      browser.keys('Tab');

      Terra.validates.element('opt-group-focus');
    });

    it('should apply hover and focus to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('opt-group-hover-and-focus');
    });
  });

  describe('Filter Style', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/form-select/native-select/filter-style'));

    it('should display select with filter style', () => {
      Terra.validates.element('filter-style-displayed');
    });

    it('should apply hover to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('filter-style-hover');
    });

    it('should set focus to the select', () => {
      $('#root').click({ x: 0, y: 0 });
      browser.keys('Tab');

      Terra.validates.element('filter-style-focus');
    });

    it('should apply hover and focus to the select', () => {
      $('#select-id').moveTo({ xoffset: 5, yoffset: 5 });

      Terra.validates.element('filter-style-hover-and-focus');
    });
  });
});
