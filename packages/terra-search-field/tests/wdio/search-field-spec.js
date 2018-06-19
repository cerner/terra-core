/* global browser, Terra, before */

const ignoredA11y = {
  label: { enabled: false },
};

describe('Search Field', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/default-search-field'));

    Terra.should.matchScreenshot('empty');

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with text');

    it('should scroll text that is too long', () => {
      browser.addValue('input', ' ipsum dolor sit amet');
    });

    Terra.should.matchScreenshot('scrolled text');
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Block', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-block'));

    Terra.should.matchScreenshot('empty');

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with text');
    Terra.should.beAccessible({ rules: ignoredA11y });
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-disabled'));

    Terra.should.matchScreenshot();
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input', 'Lorem')).to
        .throw('Element is not currently interactable and may not be manipulated');
    });

    it('should not accept clicks', () => {
      expect(browser.click.bind(browser, '[class*="button"]')).to.throw(Error);
    });
  });

  describe('With Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-with-placeholder'));

    Terra.should.matchScreenshot('placeholder');
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with text');
  });

  describe('With Default Value', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-default-value'));

    Terra.should.matchScreenshot('default value');
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('should enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 7; i += 1) {
        browser.keys('Backspace');
      }

      browser.addValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with overwritten text');
  });

  describe('With Value', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-with-value'));

    Terra.should.matchScreenshot('default value');
    Terra.should.beAccessible({ rules: ignoredA11y });

    it('should try to enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 4; i += 1) {
        browser.keys('Backspace');
      }

      browser.addValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('unchanged text');
  });

  describe('Minimum Length', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/minimum-length-search-field'));

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lore');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with too short text');

    it('should enter a long enough search term', () => {
      browser.addValue('input', 'm');
    });

    Terra.should.matchScreenshot('with long enough text');
  });

  describe('Callback', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/callback-search-field'));

    Terra.should.matchScreenshot('empty');

    it('should enter a short search term', () => {
      browser.setValue('input', 'Lo');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with too short text');

    it('should enter a short search term', () => {
      browser.addValue('input', 'rem');
    });

    Terra.should.matchScreenshot('with long enough text');
  });

  describe('On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/search-field-on-change'));

    it('should enter a letter', () => {
      browser.setValue('input', 'L');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
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
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot();
  });

  describe('Auto Search Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/auto-search-disabled-search-field'));

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('text before search');

    it('should search with the button', () => {
      browser.click('button');
      // Ensure button on hover styling is disabled
      browser.click('h3');
    });

    Terra.should.matchScreenshot('searched text');

    it('should search using enter', () => {
      browser.addValue('input', ' ipsum');
      browser.keys('Enter');
    });

    Terra.should.matchScreenshot('extended search');
  });

  describe('Delayed', () => {
    before(() => browser.url('/#/raw/tests/terra-search-field/search-field/delayed-search-field'));

    it('should not search immediately', () => {
      browser.setValue('input', 'Lorem');
      // Don't take a screenshot because this is time sensitive
      expect(browser.element('#search-callback-text').getText()).to.not.contain('Lorem');
    });

    it('should search after a delay', () => {
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
      browser.pause(1100);
    });

    Terra.should.matchScreenshot('searched');
  });
});
