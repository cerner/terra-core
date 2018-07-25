/* global before, browser, Terra */

describe('Filter View', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default Dropdown', () => {
    describe('default should select an option by click', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-dropdown'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      it('should open the dropdown by clicking the search button', () => {
        browser.click('button');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('input').style.caretColor = 'transparent';
        });
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { selector: '#root' });

      it('should select the first option', () => {
        browser.click('#terra-select-option-blue');
        // Reopen dropdown to see selection
        browser.click('button');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { selector: '#root' });
    });

    describe('default should select an option by pressing enter', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-dropdown'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      it('should open the dropdown by clicking the search button', () => {
        browser.click('button');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('input').style.caretColor = 'transparent';
        });
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { selector: '#root' });

      it('should select the first option by pressing enter', () => {
        browser.keys('Enter');
        browser.click('button');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { selector: '#root' });
    });

    describe('default should overflow text', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-dropdown'));
      Terra.should.matchScreenshot('empty');

      it('should scroll text that is too long', () => {
        browser.addValue('input', ' is a wonderful color to look at. Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.Green is a wonderful color to look at.');
        browser.execute(() => {
          // Removes the blinking cursor to prevent screenshot mismatches.
          document.querySelector('input').style.caretColor = 'transparent';
        });
      });

      Terra.should.matchScreenshot('scrolled text');
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-filter-background-color': '#85898b',
          '--terra-filter-color': '#fff',
          '--terra-filter-font-size': '2rem',
          '--terra-filter-line-height': '2',
          '--terra-filter-clear-button-color': '#85898b',
          '--terra-filter-search-font-size': '2rem',
          '--terra-filter-search-margin-top': '1rem',
          '--terra-filter-border': '5px solid #dedfe0',
          '--terra-filter-border-radius': '5px',
          '--terra-filter-padding-bottom': '5px',
          '--terra-filter-padding-left': '5px',
          '--terra-filter-padding-right': '5px',
          '--terra-filter-padding-top': '5px',
        },
      });
    });
    describe('focuses to test theme variables', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-dropdown'));

      it('tabs focus on input', () => {
        browser.keys('Tab');
      });

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-filter-focus-border-color': '#121def',
          '--terra-filter-focus-box-shadow': '5px 10px',
        },
      });
    });
  });

  describe('Default Value', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-value'));

    it('should open the dropdown', () => {
      browser.click('button');
    });
    Terra.should.matchScreenshot('default value', { selector: '#root' });

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
    Terra.should.beAccessible();
  });

  describe('Delayed', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-delayed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-disabled'));

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
        '--terra-filter-disabled-opacity': '0.5',
        '--terra-filter-disabled-button-background-color': '#fff',
        '--terra-filter-disabled-border': '5px solid #85898b',
        '--terra-filter-disabled-button-opacity': '0.75',
        '--terra-filter-disabled-background-color': '#85898b',
        '--terra-filter-disabled-color': '#dedfe1',
        '--terra-filter-disabled-placeholder-color': '1d80f3',
      },
    });
  });

  describe('Callback', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-callback'));

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
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-opt-group'));

    it('should open the dropdown by clicking the search button', () => {
      browser.click('button');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });
    Terra.should.beAccessible();
    Terra.should.matchScreenshot('open-dropdown', { selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
      // Open up the dropdown to view selected option
      browser.click('button');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('selected-option', { selector: '#root' });
  });

  describe('Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-placeholder'));

    Terra.should.matchScreenshot('placeholder');
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-filter-search-placeholder-color': '#121def',
        '--terra-filter-search-placeholder-font-size': '2rem',
      },
    });

    it('should enter a search term', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('with text');
    Terra.should.beAccessible();
  });

  describe('Auto Search Disabled', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-auto-search-disabled'));

    it('should enter a search term', () => {
      browser.setValue('input', 'Lore');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('text before search');

    it('should search with the button', () => {
      browser.click('button');
    });

    Terra.should.matchScreenshot('searched text');

    it('should search using enter', () => {
      browser.addValue('input', ' is spelled correctly');
      browser.keys('Enter');
    });

    Terra.should.matchScreenshot('extended search');
  });
  describe('On Change', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-on-change'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('no options selected');

    it('should open the dropdown', () => {
      browser.click('button');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    it('should select the first option', () => {
      browser.click('#terra-select-option-hello');
    });

    Terra.should.matchScreenshot('updated once');

    it('should select another option', () => {
      // Reopen the dropdown
      browser.click('button');
      browser.click('#terra-select-option-goodbye');
    });

    Terra.should.matchScreenshot('updated twice');
  });

  describe('No Result Content', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-no-result-content'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('initial');

    it('should enter a search term and show no result content', () => {
      browser.setValue('input', 'Lorem');
      browser.execute(() => {
        // Removes the blinking cursor to prevent screenshot mismatches.
        document.querySelector('input').style.caretColor = 'transparent';
      });
    });

    Terra.should.matchScreenshot('custom no result content', { selector: '#root' });
  });
});
