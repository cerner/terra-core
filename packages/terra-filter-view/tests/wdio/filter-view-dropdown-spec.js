/* global before, browser, Terra */

describe('Filter View', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default Dropdown', () => {
    describe('default should select an option by click', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-dropdown'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { selector: '#root' });

      it('default should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option');
    });

    describe('default should select an option by pressing enter', () => {
      before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-dropdown'));

      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { selector: '#root' });

      it('default should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option');
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
    });
  });

  describe('Default Value', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-default-value'));

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

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#search:last-child');
    });
    Terra.should.beAccessible();
    Terra.should.matchScreenshot('open-dropdown', { selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('selected-option');
  });

  describe('Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/filter-view/filter-view-dropdown/filter-view-placeholder'));

    Terra.should.matchScreenshot('placeholder');

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
});
