describe('Search Field', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-search-field/search-field/default-search-field');
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('empty', { misMatchTolerance: 0.1 });

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('with text', { misMatchTolerance: 0.1 });

    it('should scroll text that is too long', () => {
      browser.addValue('input', ' is a correctly spelled word');
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('scrolled text', { misMatchTolerance: 0.1 });
    Terra.it.isAccessible();
  });

  describe('Block', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-block'));

    Terra.it.matchesScreenshot('empty');

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('with text');
    Terra.it.isAccessible();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-disabled'));

    Terra.it.matchesScreenshot();
    Terra.it.isAccessible();

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input', 'Lorem')).to.throw(Error);
    });

    it('should not accept clicks', () => {
      expect(browser.click.bind(browser, '[class*="button"]')).to.throw(Error);
    });
  });

  describe('With Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-with-placeholder'));

    Terra.it.matchesScreenshot('placeholder');
    Terra.it.isAccessible();

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('with text');
  });

  describe('With Default Value', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-default-value'));

    Terra.it.matchesScreenshot('default value');
    Terra.it.isAccessible();

    it('should enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 7; i += 1) {
        browser.keys('Backspace');
      }

      browser.addValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('with overwritten text');
  });

  describe('With Value', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-with-value'));

    Terra.it.matchesScreenshot('default value');
    Terra.it.isAccessible();

    it('should try to enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 4; i += 1) {
        browser.keys('Backspace');
      }

      browser.addValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('unchanged text');
  });

  describe('Minimum Length', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/minimum-length-search-field'));

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lore');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('with too short text');

    it('should not search with the button', () => {
      browser.keys('Enter');
      // Ensure button on hover styling is disabled
      browser.click('#search-callback-text');
    });

    Terra.it.matchesScreenshot('with too short text after button press');

    it('should enter a long enough search term', () => {
      browser.setValue('input', 'Lore is spelled correctly');
    });

    Terra.it.matchesScreenshot('with long enough text');
  });

  describe('Callback', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/callback-search-field'));

    Terra.it.matchesScreenshot('empty');

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lo');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('with too short text');

    it('should enter a long enough search term', () => {
      browser.setValue('input', 'Lore is spelled correctly');
    });

    Terra.it.matchesScreenshot('with long enough text');
  });

  describe('On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-on-change'));

    it('should enter a letter', () => {
      browser.setValue('input', 'L');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('updated once');

    it('should enter another letter', () => {
      browser.addValue('input', 'o');
    });

    Terra.it.matchesScreenshot('updated twice');
  });

  describe('Search With Enter', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-enter'));

    it('should search with enter', () => {
      browser.click('input');
      browser.keys('Enter');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot();
  });

  describe('Auto Search Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/auto-search-disabled-search-field'));

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot('text before search');

    it('should search with the button', () => {
      browser.keys('Enter');
    });

    Terra.it.matchesScreenshot('searched text');

    it('should search using enter', () => {
      browser.addValue('input', ' is spelled correctly');
      browser.keys('Enter');
    });

    Terra.it.matchesScreenshot('extended search');
  });

  describe('Search Field in Focus', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-focus'));

    Terra.it.matchesScreenshot('empty');

    it('should click button to focus search field', () => {
      browser.waitForVisible('#search-field-focus-button');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      browser.click('#search-field-focus-button');
    });

    Terra.it.matchesScreenshot('with focus');
    Terra.it.isAccessible();
  });
});
