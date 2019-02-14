const viewports = Terra.viewports('tiny');

describe('Select', () => {
  describe('Default Variant', () => {
    describe('default should select an option by click', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#default:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('default should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('default should select an option by pressing enter', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#default:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('default should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('default controlled should select an option by click', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/controlled-default'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default controlled should open the dropdown by clicking the toggle', () => {
        browser.click('#default:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('default controlled should select the first option', () => {
        browser.click('#terra-select-option-green');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('default should truncate and wrap long text', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-default-long-text'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#default:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });
    });

    describe('should render an empty placeholder', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/empty-placeholder'));

      Terra.should.matchScreenshot({ viewports });
    });

    describe('should open the dropdown and honor the set max height', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/max-height'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('default should open the dropdown by clicking the toggle', () => {
        browser.click('#maxHeight:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown-max-height', { viewports, selector: '#root' });
    });
  });

  describe('Combobox Variant', () => {
    describe('combobox should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('combobox should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('combobox should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('combobox should select an option by pressing enter', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('combobox should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('combobox should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('combobox controlled should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/controlled-combobox');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('combobox controlled should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('combobox controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('combobox should allow a free text entry', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-combobox');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('combobox should open the dropdown by clicking the toggle', () => {
        browser.click('#combobox:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('combobox should enter a free text entry', () => {
        browser.keys(['T', 'a', 'g']);
      });

      it('combobox should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });
  });

  describe('Multiple Variant', () => {
    describe('multiple should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('multiple should open the dropdown by clicking the toggle', () => {
        browser.click('#multiple:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('multiple should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('multiple should select an option by pressing enter', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-multiple');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('multiple should open the dropdown by clicking the toggle', () => {
        browser.click('#multiple:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('multiple should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('multiple controlled should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/controlled-multiple');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('multiple controlled should open the dropdown by clicking the toggle', () => {
        browser.click('#multiple:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('multiple controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });
  });

  describe('Search Variant', () => {
    describe('search should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('search should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('search should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('search should select an option by pressing enter', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('search should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('search should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('search controlled should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/controlled-search');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('search constrolled should open the dropdown by clicking the toggle', () => {
        browser.click('#search:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('search constrolled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });
  });

  describe('Tag Variant', () => {
    describe('tag should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('tag should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('tag should select an option by pressing enter', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('tag controlled should select an option by click', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/controlled-tag');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('tag controlled should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('tag controlled should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });

    describe('tag should allow a free text entry', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-tag');
        // Removes the blinking cursor to prevent screenshot mismatches.
        browser.execute('document.querySelector("input").style.caretColor = "transparent";');
      });

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('tag should open the dropdown by clicking the toggle', () => {
        browser.click('#tag:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('tag should enter a free text entry', () => {
        browser.keys(['T', 'a', 'g']);
      });

      it('tag should select the first option by pressing enter', () => {
        browser.keys('Enter');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });
  });

  describe('OptGroup', () => {
    describe('should render an optgroup', () => {
      before(() => browser.url('/#/raw/tests/terra-form-select/form-select/opt-group'));

      Terra.should.beAccessible({ viewports });
      Terra.should.matchScreenshot({ viewports });

      it('should open the dropdown by clicking the toggle', () => {
        browser.click('#opt-group:last-child');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('open-dropdown', { viewports, selector: '#root' });

      it('should select the first option', () => {
        browser.click('#terra-select-option-blue');
      });

      Terra.should.beAccessible();
      Terra.should.matchScreenshot('selected-option', { viewports });
    });
  });
});
