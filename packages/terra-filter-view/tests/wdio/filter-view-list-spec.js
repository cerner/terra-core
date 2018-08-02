/* global before, browser, Terra */

describe('Filter View', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default List', () => {
    describe('default should select an option by click', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-default-list'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('none selected');

      it('should select an option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option');
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-filter-list-border': '5px dotted #85898b',
          '--terra-filter-list-margin-top': '5rem',
        },
      });
    });

    describe('default should select an option by pressing enter', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-default-list'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('none selected');

      it('should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option');
    });

    describe('default should overflow text', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-default-list'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('empty input');

      it('should scroll text that is too long', () => {
        browser.addValue('input', ' is a wonderful color to look at. Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('input').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('scrolled text');
    });
  });

  describe('Default Value', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-default-value'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('default value');

    it('should enter a new search term', () => {
      browser.click('input');
      for (let i = 0; i < 6; i += 1) {
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

  describe('Delayed', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-delayed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-disabled'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();

    it('should not accept keyboard input', () => {
      expect(browser.setValue.bind(browser, 'input', 'Lorem')).to
        .throw('Element is not currently interactable and may not be manipulated');
    });

    it('should not accept clicks', () => {
      expect(browser.click.bind(browser, '[class*="button"]')).to.throw(Error);
    });

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-filter-disabled-list-border': '5px dotted #85898b',
        '--terra-filter-disabled-list-background-color': '#dedfe0',
      },
    });
  });

  describe('Callback', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-callback'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('empty');
    it('should enter a short search term', () => {
      browser.setValue('input', 'Lo');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with too short text');
    it('should enter a long enough search term', () => {
      browser.setValue('input', 'Lore is spelled correctly');
    });

    Terra.should.matchScreenshot('with long enough text');
  });

  describe('Opt Group', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-opt-group'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('none selected');

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('selected-option');
  });

  describe('Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-placeholder'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('placeholder');

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with text');
  });
  describe('Auto Search Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-auto-search-disabled'));

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('text before search', { selector: '#root' });

    it('should search with the button', () => {
      browser.click('div[class*="search-button"]');
      browser.waitForExist('#search-callback-text');
    });

    Terra.should.matchScreenshot('searched text', { selector: '#root' });

    it('should search using enter', () => {
      browser.addValue('input', ' is spelled correctly');
      browser.keys('Enter');
    });

    Terra.should.matchScreenshot('extended search', { selector: '#root' });
  });

  describe('No Results Initially', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-no-results-initially'));

    Terra.should.matchScreenshot('no results shown');

    it('should focus input to show results', () => {
      browser.click('input');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('results shown');
  });

  describe('On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-on-change'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('no options selected');

    it('should select an option', () => {
      browser.click('#terra-select-option-hello');
    });

    Terra.should.matchScreenshot('updated once');

    it('should select another option', () => {
      browser.click('#terra-select-option-goodbye');
    });

    Terra.should.matchScreenshot('updated twice');
  });

  describe('No Result Content', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-list/filter-view-list-no-result-content'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('initial');

    it('should enter input to show no results', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('custom no results shown');
  });
});
