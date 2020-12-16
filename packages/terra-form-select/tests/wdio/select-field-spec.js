Terra.describeViewports('Select Field', ['tiny'], () => {
  describe('select an option by click', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/select-field'));

    it('should select an option by click', () => {
      Terra.validates.element('default');
    });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field:last-child');

      Terra.validates.element('open-dropdown', { selector: '#root' });
    });

    it('should select the first option', () => {
      browser.click('#terra-select-option-xSmall');

      Terra.validates.element('selected-option');
    });
  });

  it('should render a disabled Select Field', () => {
    browser.url('/raw/tests/terra-form-select/form-select/disabled-select-field');

    Terra.validates.element('disabled');
  });

  it('should render an invalid Select Field', () => {
    browser.url('/raw/tests/terra-form-select/form-select/invalid-select-field');

    Terra.validates.element('invalid');
  });

  it('should render an incomplete Select Field', () => {
    browser.url('/raw/tests/terra-form-select/form-select/incomplete-select-field');

    Terra.validates.element('incomplete');
  });

  describe('select an option by pressing enter', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/select-field'));

    it('should select an option by pressing enter', () => {
      Terra.validates.element('default');
    });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field:last-child');

      Terra.validates.element('open-dropdown', { selector: '#root' });
    });

    it('should select the first option by pressing enter', () => {
      browser.keys('ArrowUp');
      browser.keys('Enter');

      Terra.validates.element('selected-option');
    });
  });

  describe('select the maximum number of items allowed', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/max-selection'));

    it('should select the maximum number of items allowed', () => {
      Terra.validates.element('default');
    });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-select-combobox]');

      Terra.validates.element('open-dropdown', { selector: '#root' });
    });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');

      Terra.validates.element('selected-first-option', { selector: '#root' });
    });

    it('should select the second option', () => {
      browser.click('#terra-select-option-cyan');

      Terra.validates.element('max-selection-count-reached', { selector: '#root' });
    });

    it('should unselect the second option', () => {
      browser.click('#terra-select-option-cyan');

      Terra.validates.element('unselect-second-option', { selector: '#root' });
    });

    it('should select the second option again', () => {
      browser.click('#terra-select-option-green');

      Terra.validates.element('max-selection-count-reached-again', { selector: '#root' });
    });

    it('should not be able to select additional options as the max count as reached', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');

      Terra.validates.element('options-disabled', { selector: '#root' });
    });

    it('should show the max count text with the help text', () => {
      browser.keys('Escape');

      Terra.validates.element('max-selection-count-text');
    });

    after(() => browser.refresh());
  });

  describe('show the max selection option on search', () => {
    before(() => {
      browser.url('/raw/tests/terra-form-select/form-select/max-selection');
    });

    it('should show the max selection option on search', () => {
      Terra.validates.element('default');
    });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-select-combobox]');

      Terra.validates.element('open-dropdown', { selector: '#root' });
    });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
      browser.click('#terra-select-option-cyan');

      Terra.validates.element('max-selection-count-reached', { selector: '#root' });
    });

    it('should show the max selection option', () => {
      browser.keys('x');

      Terra.validates.screenshot('max-selection-option', { selector: '#root' });
    });
  });

  describe('accessible with no results', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/uncontrolled-search'));

    it('should be accessible with no results', () => {
      Terra.validates.element('default');
    });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#search:last-child');
    });

    it('select should enter a free text entry', () => {
      browser.keys(['T', 'a', 'g']);

      Terra.validates.element('open-dropdown', { selector: '#root' });
    });
  });

  describe('open the Combobox field and honor the set max height', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/combobox-field-max-height'));

    it('should open the Combobox field and honor the set max height', () => {
      Terra.validates.element('default');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#comboboxField:last-child');

      Terra.validates.element('combobox-field-dropdown-max-height', { selector: '#root' });
    });
  });

  describe('should open the Multi select field and honor the set max height', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/multi-select-field-maxheight'));

    it('should open the Multi select field and honor the set max heigh', () => {
      Terra.validates.element('default');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-form-select-toggle]');

      Terra.validates.element('multi-select-dropdown-max-height', { selector: '#root' });
    });
  });

  describe('should open the search select and honor the set max height', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/search-select-field-maxheight'));

    it('should open the search select and honor the set max height', () => {
      Terra.validates.element('default');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#searchSelectField:last-child');

      Terra.validates.element('search-select-dropdown-max-height', { selector: '#root' });
    });
  });

  describe('open the Select field and honor the set max height', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/select-field-maxheight'));

    it('should open the Select field and honor the set max height', () => {
      Terra.validates.element('default');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#selectField:last-child');

      Terra.validates.element('select-field-dropdown-max-height', { selector: '#root' });
    });
  });

  describe('open the Single select field and honor the set max height', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/single-select-field-maxheight'));

    it('should open the Single select field and honor the set max height', () => {
      Terra.validates.element('default');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#singleSelectField:last-child');

      Terra.validates.element('single-select-dropdown-max-height', { selector: '#root' });
    });
  });

  describe('open the Tag select field and honor the set max height', () => {
    before(() => browser.url('/raw/tests/terra-form-select/form-select/tag-select-field-maxheight'));

    it('should open the Tag select field and honor the set max height', () => {
      Terra.validates.element('default');
    });

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-form-select-toggle]');

      Terra.validates.element('tag-select-dropdown-max-height', { selector: '#root' });
    });
  });
});
