Terra.describeViewports('Search Field', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/search-field/default-search-field');
    });

    it('should display empty Search Field', () => {
      Terra.validates.element('default empty', { mismatchTolerance: 0.1 });
    });

    it('should enter a search term', () => {
      $('input').setValue('Lore', { mismatchTolerance: 0.1 });
    });

    it('should display Search Field with text', () => {
      Terra.validates.element('default with text', { mismatchTolerance: 0.1 });
    });

    it('should scroll text that is too long', () => {
      $('input').addValue(' is a correctly spelled word');
    });

    it('should display Search Field with scrolled text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('default scrolled text', { mismatchTolerance: 0.1 });
    });
  });

  describe('Block', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-block'));

    it('should display empty Search Field', () => {
      Terra.validates.element('block empty');
    });

    it('should enter a search term', () => {
      $('input').setValue('Lorem');
    });

    it('should display Search Field with text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('block with text');
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-disabled'));

    it('should display disabled Search Field', () => {
      Terra.validates.element('disabled default');
    });

    it('should not accept keyboard input', () => {
      expect($('input').isEnabled()).toBe(false);
    });

    it('should not accept clicks', () => {
      expect($('#searchfield > [data-terra-search-field-button="Search"]').isEnabled()).toBe(false);
    });
  });

  describe('Placeholder', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-with-placeholder'));

    it('should display Search Field with placeholder', () => {
      Terra.validates.element('placeholder default');
    });

    it('should enter a search term', () => {
      $('input').setValue('Lorem');
    });

    it('should display Search Field with text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('placeholder with text');
    });
  });

  describe('Placeholder Disabled', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-with-placeholder-disabled'));
    it('should display disabled Search Field with placeholder', () => {
      Terra.validates.element('disabled placeholder default');
    });
  });

  describe('Default Value', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-default-value'));

    it('should display Search Field with default value', () => {
      Terra.validates.element('default value default');
    });

    it('should clear the value', () => {
      $('#searchfield [data-terra-search-field-button="Clear"]').click();

      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('default value clear');
    });

    it('should enter a new search term', () => {
      $('input').addValue('Lorem');
    });

    it('should display Search Field with overwritten text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('default value with overwritten text');
    });
  });

  describe('Value', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-with-value'));

    it('should display Search Field with value', () => {
      Terra.validates.element('value default');
    });

    it('should try to enter a new search term', () => {
      $('input').click();
      for (let i = 0; i < 4; i += 1) {
        browser.keys('Backspace');
      }

      $('input').addValue('Lorem');
    });

    it('should display Search Field with unchanged text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('value unchanged text');
    });
  });

  describe('Minimum Length', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/minimum-length-search-field'));

    it('should enter a short search term', () => {
      $('input').setValue('Lore');
    });

    it('should display Search Field with too short text', () => {
      Terra.validates.element('minimum length too short text', { mismatchTolerance: 0.1 });
    });

    it('should not search with the button', () => {
      browser.keys('Enter');
      // Ensure button on hover styling is disabled
      $('#search-callback-text').click();
    });

    it('should display Search Field with too short text after button press', () => {
      Terra.validates.element('minimum length with too short text after button press');
    });

    it('should enter a long enough search term', () => {
      $('input').setValue('Lore is spelled correctly');
    });

    it('should display Search Field with long enough text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('minimum length with long enough text', { mismatchTolerance: 0.1 });
    });
  });

  describe('Callback', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/callback-search-field'));

    it('should display empty Search Field', () => {
      Terra.validates.element('callback empty');
    });

    it('should enter a long enough search term', () => {
      $('input').setValue('Lore is spelled correctly');
    });

    it('should display Search Field with long enough text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('callback with long enough text');
    });

    it('should enter a short search term', () => {
      $('input').setValue('Lo');
      $('#search-callback-text').waitForDisplayed();
    });

    it('should display Search Field with too short text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('callback with too short text', { mismatchTolerance: 0.1 });
    });
  });

  describe('Setting Value', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/setting-value-search-field'));

    it('should display empty Search Field', () => {
      Terra.validates.element('setting value empty');
    });

    it('should trigger search when entering a long enough search term', () => {
      $('input').setValue('LoremIpsum');
    });

    it('should display Search Field with typed text', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('setting value typed', { mismatchTolerance: 0.1 });
    });

    it('should trigger search when cutting', () => {
      // select text
      $('input').addValue(['Shift', 'Left arrow', 'Left arrow', 'Left arrow', 'Left arrow', 'NULL']);
      // cut text
      $('input').addValue(['Control', 'x', 'NULL']);
    });

    it('should display Search Field after cut operation', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('setting value cut');
    });

    it('should trigger search when pasting', () => {
      // paste value from clipboard
      $('input').addValue(['Control', 'v']);
    });

    it('should display Search Field after paste operation', () => {
      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('setting value paste');
    });

    it('should not trigger search when programmatically setting value', () => {
      $('#search-field-set-text-button').click();
      $('#searchfield').click();
      browser.pause(2000);

      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('setting value programmatically');
    });

    it('should search with value on search button press', () => {
      $('#searchfield > [data-terra-search-field-button="Search"]').click();

      expect($('button[data-terra-search-field-button="Search"]').isFocused()).toBeTruthy();
      Terra.validates.element('setting value search');
    });
  });

  describe('On Change', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-on-change'));

    it('should enter a letter', () => {
      $('input').setValue('L');

      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('on change updated once');
    });

    it('should enter another letter', () => {
      $('input').addValue('o');

      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('on change updated twice');
    });
  });

  describe('Search With Enter', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-enter'));

    it('should search with enter', () => {
      $('input').click();
      browser.keys('Enter');

      expect($('button[data-terra-search-field-button="Search"]').isFocused()).toBeTruthy();
      Terra.validates.element('search with enter default');
    });
  });

  describe('Auto Search Disabled', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/auto-search-disabled-search-field'));

    it('should enter a search term', () => {
      $('input').setValue('Lore');

      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('auto search disabled text before search', { mismatchTolerance: 0.1 });
    });

    it('should search with the button', () => {
      browser.keys('Enter');

      expect($('button[data-terra-search-field-button="Search"]').isFocused()).toBeTruthy();
      Terra.validates.element('auto search disabled searched text');
    });

    it('should search using enter', () => {
      $('input').addValue(' is spelled correctly');
      browser.keys('Enter');

      expect($('button[data-terra-search-field-button="Search"]').isFocused()).toBeTruthy();
      Terra.validates.element('auto search disabled extended search');
    });
  });

  describe('Search Field in Focus', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/search-field-focus'));

    it('should display empty Search Field', () => {
      Terra.validates.element('focus empty');
    });

    it('should click button to focus search field', () => {
      $('#search-field-focus-button').waitForDisplayed();
      $('#search-field-focus-button').click();

      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('focus with focus');
    });
  });

  describe('Clear Button in Focus', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/minimum-length-search-field'));

    it('should enter a search term', () => {
      $('input').setValue('Lore');
      browser.keys(['Tab']);
    });

    it('should focus clear button', () => {
      expect($('button[data-terra-search-field-button="Clear"]').isFocused()).toBeTruthy();
      Terra.validates.element('clear button focused');
    });
  });

  describe('Delayed Search Field', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/search-field/delayed-search-field'));

    it('should enter 5 characters with 0.25s intervals', () => {
      const input = $('input');
      input.setValue('L');
      setTimeout(() => { input.addValue('L'); }, 250);
      setTimeout(() => { input.addValue('L'); }, 250);
      setTimeout(() => { input.addValue('L'); }, 250);
      setTimeout(() => { input.addValue('L'); }, 250);

      expect($('input[type="search"]').isFocused()).toBeTruthy();
      Terra.validates.element('empty search text', { mismatchTolerance: 0.1 });
    });
  });
});
