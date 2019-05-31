const viewports = Terra.viewports('tiny');

describe('Select Field', () => {
  describe('should select an option by click', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field:last-child');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('open-dropdown', { viewports, selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-xSmall');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('selected-option', { viewports });
  });

  describe('disabled', () => {
    it('should render a disabled Select Field', () => {
      browser.url('/#/raw/tests/terra-form-select/form-select/disabled-select-field');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('should select an option by pressing enter', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/select-field'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field:last-child');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('open-dropdown', { viewports, selector: '#root' });

    it('should select the first option by pressing enter', () => {
      browser.keys('ArrowUp');
      browser.keys('Enter');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('selected-option', { viewports });
  });

  describe('should select the maximum number of items allowed.', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-select/form-select/max-selection');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('open-dropdown', { viewports, selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('selected-first-option', { viewports, selector: '#root' });

    it('should select the second option', () => {
      browser.click('#terra-select-option-cyan');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('max-selection-count-reached', { viewports, selector: '#root' });

    it('should unselect the second option', () => {
      browser.click('#terra-select-option-cyan');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('unselect-second-option', { viewports, selector: '#root' });

    it('should select the second option again', () => {
      browser.click('#terra-select-option-green');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('max-selection-count-reached-again', { viewports, selector: '#root' });

    it('should not be able to select additional options as the max count as reached', () => {
      browser.keys('ArrowDown');
      browser.keys('Enter');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('options-disabled', { viewports, selector: '#root' });

    it('should show the max count text with the help text', () => {
      browser.keys('Escape');
    });

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot('max-selection-count-text', { viewports });

    after(() => browser.refresh());
  });

  describe('should show the max selection option on search', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-form-select/form-select/max-selection');
      // Removes the blinking cursor to prevent screenshot mismatches.
      browser.execute('document.querySelector("input").style.caretColor = "transparent";');
    });

    Terra.it.matchesScreenshot({ viewports });

    it('should open the dropdown by clicking the toggle', () => {
      browser.click('#select-field');
    });

    Terra.it.matchesScreenshot('open-dropdown', { viewports, selector: '#root' });

    it('should select the first option', () => {
      browser.click('#terra-select-option-blue');
      browser.click('#terra-select-option-cyan');
    });

    Terra.it.matchesScreenshot('max-selection-count-reached', { viewports, selector: '#root' });

    it('should show the max selection option', () => {
      browser.keys('x');
    });

    Terra.it.matchesScreenshot('max-selection-option', { viewports, selector: '#root' });
  });
});
