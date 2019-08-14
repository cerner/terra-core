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
      browser.click('#select-field');
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
      browser.click('#select-field');
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
});
