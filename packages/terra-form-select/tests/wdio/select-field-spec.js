Terra.describeViewports('Select Field', ['tiny'], () => {
  describe('should select an option by click', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

    Terra.it.validatesElement();

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field:last-child');
    });

    Terra.it.validatesElement('open-dropdown', { selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-xSmall');
    });

    Terra.it.validatesElement('selected-option');
  });

  describe('disabled', () => {
    it('should render a disabled Select Field', () => {
      browser.url('/#/raw/tests/terra-form-select/form-select/disabled-select-field');
    });

    Terra.it.validatesElement();
  });

  describe('invalid', () => {
    it('should render an incomplete Select Field', () => {
      browser.url('/#/raw/tests/terra-form-select/form-select/invalid-select-field');
    });

    Terra.it.validatesElement();
  });

  describe('incomplete', () => {
    it('should render an incomplete Select Field', () => {
      browser.url('/#/raw/tests/terra-form-select/form-select/incomplete-select-field');
    });

    Terra.it.validatesElement();
  });

  describe('should select an option by pressing enter', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

    Terra.it.validatesElement();

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field:last-child');
    });

    Terra.it.validatesElement('open-dropdown', { selector: '#root' });

    it('should select the first option by pressing enter', () => {
      browser.keys('ArrowUp');
      browser.keys('Enter');
    });

    Terra.it.validatesElement('selected-option');
  });

  describe('should select the maximum number of items allowed.', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-select/form-select/max-selection');
    });

    Terra.it.validatesElement();

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-select-combobox]');
    });

    Terra.it.validatesElement('open-dropdown', { selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
    });

    Terra.it.validatesElement('selected-first-option', { selector: '#root' });

    it('should select the second option', () => {
      browser.click('#terra-select-option-cyan');
    });

    Terra.it.validatesElement('max-selection-count-reached', { selector: '#root' });

    it('should unselect the second option', () => {
      browser.click('#terra-select-option-cyan');
    });

    Terra.it.validatesElement('unselect-second-option', { selector: '#root' });

    it('should select the second option again', () => {
      browser.click('#terra-select-option-green');
    });

    Terra.it.validatesElement('max-selection-count-reached-again', { selector: '#root' });

    it('should not be able to select additional options as the max count as reached', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');
    });

    Terra.it.validatesElement('options-disabled', { selector: '#root' });

    it('should show the max count text with the help text', () => {
      browser.keys('Escape');
    });

    Terra.it.validatesElement('max-selection-count-text');

    after(() => browser.refresh());
  });

  describe('should show the max selection option on search', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-select/form-select/max-selection');
    });

    Terra.it.validatesElement();

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-select-combobox]');
    });

    Terra.it.matchesScreenshot('open-dropdown', { selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
      browser.click('#terra-select-option-cyan');
    });

    Terra.it.matchesScreenshot('max-selection-count-reached', { selector: '#root' });

    it('should show the max selection option', () => {
      browser.keys('x');
    });

    Terra.it.matchesScreenshot('max-selection-option', { selector: '#root' });
  });

  describe('should be accessible with no results', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/uncontrolled-search'));

    Terra.it.validatesElement();

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#search:last-child');
    });
    it('select should enter a free text entry', () => {
      browser.keys(['T', 'a', 'g']);
    });

    Terra.it.validatesElement('open-dropdown', { selector: '#root' });
  });

  describe('should open the Combobox field and honor the set max height', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/combobox-field-max-height'));

    Terra.it.validatesElement();

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#comboboxField:last-child');
    });

    Terra.it.validatesElement('combobox-field-dropdown-max-height', { selector: '#root' });
  });

  describe('should open the Multi select field and honor the set max height', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/multi-select-field-maxheight'));

    Terra.it.validatesElement();

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-form-select-toggle]');
    });

    Terra.it.validatesElement('multi-select-dropdown-max-height', { selector: '#root' });
  });

  describe('should open the  search select and honor the set max height', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/search-select-field-maxheight'));

    Terra.it.validatesElement();

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#searchSelectField:last-child');
    });

    Terra.it.validatesElement('search-select-dropdown-max-height', { selector: '#root' });
  });

  describe('should open the  Select field and honor the set max height', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field-maxheight'));

    Terra.it.validatesElement();

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#selectField:last-child');
    });

    Terra.it.validatesElement('select-field-dropdown-max-height', { selector: '#root' });
  });

  describe('should open the  Single select field and honor the set max height', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/single-select-field-maxheight'));

    Terra.it.validatesElement();

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('#singleSelectField:last-child');
    });

    Terra.it.validatesElement('single-select-dropdown-max-height', { selector: '#root' });
  });

  describe('should open the  Tag select field and honor the set max height', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/tag-select-field-maxheight'));

    Terra.it.validatesElement();

    it('default should open the dropdown by clicking the toggle', () => {
      browser.click('[data-terra-form-select-toggle]');
    });

    Terra.it.validatesElement('tag-select-dropdown-max-height', { selector: '#root' });
  });
});
