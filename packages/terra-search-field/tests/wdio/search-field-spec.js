Terra.describeViewports('Search Field', ['medium'], () => {
  describe('Default', () => {
    before(() => {
      browser.url('/raw/tests/terra-search-field/search-field/default-search-field');
    });

    it('should display empty Search Field', () => {
      Terra.validates.element('empty', { misMatchTolerance: 0.1 });
    });

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');
    });

    it('should display Search Field with text', () => {
      Terra.validates.element('with text', { misMatchTolerance: 0.1 });
    });

    it('should scroll text that is too long', () => {
      browser.addValue('input', ' is a correctly spelled word');
    });

    it('should display Search Field with scrolled text', () => {
      Terra.validates.element('scrolled text', { misMatchTolerance: 0.1 });
    });
  });

  describe('Block', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-block'));

    it('should display empty Search Field', () => {
      Terra.validates.element('empty');
    });

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
    });

    it('should display Search Field with text', () => {
      Terra.validates.element('with text');
    });
  });

  describe('Disabled', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-disabled'));

    it('should display disabled Search Field', () => {
      Terra.validates.element('default');
    });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input', 'Lorem')).to.throw(Error);
    });

    it('should not accept clicks', () => {
      expect(browser.click.bind(browser, '#searchfield > [data-terra-search-field-button="Search"]')).to.throw(Error);
    });
  });

  describe('Placeholder', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-with-placeholder'));

    it('should display Search Field with placeholder', () => {
      Terra.validates.element('default');
    });

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
    });

    it('should display Search Field with text', () => {
      Terra.validates.element('with text');
    });
  });

  describe('Placeholder Disabled', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-with-placeholder-disabled'));
    it('should display disabled Search Field with placeholder', () => {
      Terra.validates.element('default');
    });
  });

  describe('Default Value', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-default-value'));

    it('should display Search Field with default value', () => {
      Terra.validates.element('default');
    });

    it('should clear the value', () => {
      browser.click('#searchfield [data-terra-search-field-button="Clear"]');

      Terra.validates.element('Clear');
    });

    it('should enter a new search term', () => {
      browser.addValue('input', 'Lorem');
    });

    it('should display Search Field with overwritten text', () => {
      Terra.validates.element('with overwritten text');
    });
  });

  describe('Value', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-with-value'));

    it('should display Search Field with value', () => {
      Terra.validates.element('default');
    });

    it('should try to enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 4; i += 1) {
        browser.keys('Backspace');
      }

      browser.addValue('input', 'Lorem');
    });

    it('should display Search Field with unchanged text', () => {
      Terra.validates.element('unchanged text');
    });
  });

  describe('Minimum Length', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/minimum-length-search-field'));

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lore');
    });

    it('should display Search Field with too short text', () => {
      Terra.validates.element('too short text');
    });

    it('should not search with the button', () => {
      browser.keys('Enter');
      // Ensure button on hover styling is disabled
      browser.click('#search-callback-text');
    });

    it('should display Search Field with too short text after button press', () => {
      Terra.validates.element('with too short text after button press');
    });

    it('should enter a long enough search term', () => {
      browser.setValue('input', 'Lore is spelled correctly');
    });

    it('should display Search Field with long enough text', () => {
      Terra.validates.element('with long enough text');
    });
  });

  describe('Callback', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/callback-search-field'));

    it('should display empty Search Field', () => {
      Terra.validates.element('empty');
    });

    it('should enter a long enough search term', () => {
      browser.setValue('input', 'Lore is spelled correctly');
    });

    it('should display Search Field with long enough text', () => {
      Terra.validates.element('with long enough text');
    });

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lo');
      browser.waitForVisible('#search-callback-text');
    });

    it('should display Search Field with too short text', () => {
      Terra.validates.element('with too short text');
    });
  });

  describe('Setting Value', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/setting-value-search-field'));

    it('should display empty Search Field', () => {
      Terra.validates.element('empty');
    });

    it('should trigger search when entering a long enough search term', () => {
      browser.setValue('input', 'LoremIpsum');
    });

    it('should display Search Field with typed text', () => {
      Terra.validates.element('typed');
    });

    it('should trigger search when cutting', () => {
      // select text
      browser.addValue('input', ['Shift', 'Left arrow', 'Left arrow', 'Left arrow', 'Left arrow', 'NULL']);
      // cut text
      browser.addValue('input', ['Control', 'x', 'NULL']);
    });

    it('should display Search Field after cut operation', () => {
      Terra.validates.element('cut');
    });

    it('should trigger search when pasting', () => {
      // paste value from clipboard
      browser.addValue('input', ['Control', 'v']);
    });

    it('should display Search Field after paste operation', () => {
      Terra.validates.element('paste');
    });

    it('should not trigger search when programmatically setting value', () => {
      browser.click('#search-field-set-text-button');
      browser.click('#searchfield');
      browser.pause(2000);

      Terra.validates.element('programmatically');
    });

    it('should search with value on search button press', () => {
      browser.click('#searchfield > [data-terra-search-field-button="Search"]');

      Terra.validates.element('search');
    });
  });

  describe('On Change', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-on-change'));

    it('should enter a letter', () => {
      browser.setValue('input', 'L');

      Terra.validates.element('updated once');
    });

    it('should enter another letter', () => {
      browser.addValue('input', 'o');

      Terra.validates.element('updated twice');
    });
  });

  describe('Search With Enter', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-enter'));

    it('should search with enter', () => {
      browser.click('input');
      browser.keys('Enter');

      Terra.validates.element('default');
    });
  });

  describe('Auto Search Disabled', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/auto-search-disabled-search-field'));

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');

      Terra.validates.element('text before search');
    });

    it('should search with the button', () => {
      browser.keys('Enter');

      Terra.validates.element('searched text');
    });

    it('should search using enter', () => {
      browser.addValue('input', ' is spelled correctly');
      browser.keys('Enter');

      Terra.validates.element('extended search');
    });
  });

  describe('Search Field in Focus', () => {
    before(() => browser.url('/raw/tests/terra-search-field/search-field/search-field-focus'));

    it('should display empty Search Field', () => {
      Terra.validates.element('empty');
    });

    it('should click button to focus search field', () => {
      browser.waitForVisible('#search-field-focus-button');
      browser.click('#search-field-focus-button');

      Terra.validates.element('with focus');
    });
  });
});
