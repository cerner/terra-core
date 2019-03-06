describe('Search Field', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/default-search-field'));

    Terra.should.matchScreenshot('empty');

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('with text');

    it('should scroll text that is too long', () => {
      browser.addValue('input', ' is a correctly spelled word');
    });

    Terra.should.matchScreenshot('scrolled text');
    Terra.should.beAccessible();

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-search-field-input-border-bottom-left-radius': '1em',
        '--terra-search-field-input-border-top-left-radius': '1em',
        '--terra-search-field-button-border-bottom-right-radius': '1em',
        '--terra-search-field-button-border-top-right-radius': '1em',
        '--terra-search-field-button-border': '2px dotted red',
        '--terra-search-field-button-margin-bottom': '10px',
        '--terra-search-field-button-margin-left': '-10px',
        '--terra-search-field-button-margin-right': '10px',
        '--terra-search-field-button-margin-top': '10px',
        '--terra-search-field-input-margin-bottom': '10px',
        '--terra-search-field-input-margin-left': '10px',
        '--terra-search-field-input-margin-right': '10px',
        '--terra-search-field-input-margin-top': '10px',
      },
    });
  });

  describe('Block', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-block'));

    Terra.should.matchScreenshot('empty');

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('with text');
    Terra.should.beAccessible();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-disabled'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input', 'Lorem')).to.throw(Error);
    });

    it('should not accept clicks', () => {
      expect(browser.click.bind(browser, '[class*="button"]')).to.throw(Error);
    });
  });

  describe('With Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-with-placeholder'));

    Terra.should.matchScreenshot('placeholder');
    Terra.should.beAccessible();

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('with text');
  });

  describe('With Default Value', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-default-value'));

    Terra.should.matchScreenshot('default value');
    Terra.should.beAccessible();

    it('should enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 7; i += 1) {
        browser.keys('Backspace');
      }

      browser.addValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('with overwritten text');
  });

  describe('With Value', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-with-value'));

    Terra.should.matchScreenshot('default value');
    Terra.should.beAccessible();

    it('should try to enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 4; i += 1) {
        browser.keys('Backspace');
      }

      browser.addValue('input', 'Lorem');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('unchanged text');
  });

  describe('Minimum Length', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/minimum-length-search-field'));

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lore');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('with too short text');

    it('should not search with the button', () => {
      browser.click('button');
      // Ensure button on hover styling is disabled
      browser.click('#search-callback-text');
    });

    Terra.should.matchScreenshot('with too short text after button press');

    it('should enter a long enough search term', () => {
      browser.setValue('input', 'Lore is spelled correctly');
    });

    Terra.should.matchScreenshot('with long enough text');
  });

  describe('Callback', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/callback-search-field'));

    Terra.should.matchScreenshot('empty');

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lo');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('with too short text');

    it('should enter a long enough search term', () => {
      browser.setValue('input', 'Lore is spelled correctly');
    });

    Terra.should.matchScreenshot('with long enough text');
  });

  describe('On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-on-change'));

    it('should enter a letter', () => {
      browser.setValue('input', 'L');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('updated once');

    it('should enter another letter', () => {
      browser.addValue('input', 'o');
    });

    Terra.should.matchScreenshot('updated twice');
  });

  describe('Search With Enter', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-enter'));

    it('should search with enter', () => {
      browser.click('input');
      browser.keys('Enter');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot();
  });

  describe('Auto Search Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/auto-search-disabled-search-field'));

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.should.matchScreenshot('text before search');

    it('should search with the button', () => {
      browser.click('button');
      // Ensure button on hover styling is disabled
      browser.click('h3');
    });

    Terra.should.matchScreenshot('searched text');

    it('should search using enter', () => {
      browser.addValue('input', ' is spelled correctly');
      browser.keys('Enter');
    });

    Terra.should.matchScreenshot('extended search');
  });

  describe('Search Field in Focus', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-focus'));

    Terra.should.matchScreenshot('empty');

    it('should click button to focus search field', () => {
      browser.waitForVisible('#search-field-focus-button');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      browser.click('#search-field-focus-button');
    });

    Terra.should.matchScreenshot('with focus');
    Terra.should.beAccessible();
  });
});
