const viewports = Terra.viewports('medium');

describe('Multi-Select Table', () => {
  describe('Multi-Select Table - Click Operations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table');
      browser.waitForVisible('table');
    });

    it('selects the second row', () => {
      browser.click('[class*="row"]:nth-child(1)');
    });

    Terra.it.matchesScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.click('[class*="row"]:nth-child(2)');
    });

    Terra.it.matchesScreenshot('second-row', { viewports });

    it('selects the third row', () => {
      browser.click('[class*="row"]:nth-child(3)');
    });

    Terra.it.matchesScreenshot('third-row', { viewports });

    after(() => {
      // deselect rows
      browser.click('[class*="row"]:nth-child(1)');
      browser.click('[class*="row"]:nth-child(2)');
      browser.click('[class*="row"]:nth-child(3)');
    });
  });

  describe('Multi-Select Table - Keyboard ENTER key', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table');
      browser.waitForVisible('table');
      // reset focusable point for keyboard navigation
      browser.click('[data-terra-table-header-cell]:nth-child(1)');
    });

    it('selects the first row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot('second-row', { viewports });

    it('selects the third row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot('third-row', { viewports });

    after(() => {
      // deselect rows
      browser.click('[class*="row"]:nth-child(1)');
      browser.click('[class*="row"]:nth-child(2)');
      browser.click('[class*="row"]:nth-child(3)');
    });
  });

  describe('Multi-Select Table - Keyboard SPACE key', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table');
      browser.waitForVisible('table');
      // reset focusable point for keyboard navigation
      browser.click('[data-terra-table-header-cell]:nth-child(1)');
    });

    it('selects the first row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.it.matchesScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.it.matchesScreenshot('second-row', { viewports });

    it('selects the third row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.it.matchesScreenshot('third-row', { viewports });

    after(() => {
      // deselect rows
      browser.click('[class*="row"]:nth-child(1)');
      browser.click('[class*="row"]:nth-child(2)');
      browser.click('[class*="row"]:nth-child(3)');
    });
  });

  describe('Multi-Select Table - onChange operations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-on-change');
      browser.waitForVisible('table');
    });

    it('selects the first row', () => {
      browser.click('[class*="row"]:nth-child(1)');
    });

    Terra.it.matchesScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.click('[class*="row"]:nth-child(2)');
    });

    Terra.it.matchesScreenshot('second-row', { viewports });

    it('selects the third row', () => {
      browser.click('[class*="row"]:nth-child(3)');
    });

    Terra.it.matchesScreenshot('third-row', { viewports });
  });

  describe('Multi-Select Table - Preselected', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-preselected');
      browser.waitForVisible('table');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Multi-Select Table - Non Selectable', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-non-selectable');
      browser.waitForVisible('table');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Multi-Select Table - Max Selection (OnClick)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-max-count');
      browser.waitForVisible('table');
    });

    it('selects the first row', () => {
      browser.click('[class*="row"]:nth-child(1)');
    });

    Terra.it.matchesScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.click('[class*="row"]:nth-child(2)');
    });

    Terra.it.matchesScreenshot('second-row', { viewports });

    it('attempts to select the third row', () => {
      browser.click('[class*="row"]:nth-child(3)');
    });

    Terra.it.matchesScreenshot('third-row', { viewports });

    after(() => {
      // deselect the rows
      browser.click('[class*="row"]:nth-child(1)');
      browser.click('[class*="row"]:nth-child(2)');
    });
  });

  describe('Multi-Select Table - Max Selection (keypress ENTER)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-max-count');
      browser.waitForVisible('table');
      // reset focusable point for keyboard navigation
      browser.click('[data-terra-table-header-cell]:nth-child(1)');
    });

    it('selects the first row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot('second-row', { viewports });

    it('attempts to select the third row', () => {
      browser.keys(['Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot('third-row', { viewports });

    after(() => {
      // deselect the rows
      browser.click('[class*="row"]:nth-child(1)');
      browser.click('[class*="row"]:nth-child(2)');
    });
  });

  describe('Multi-Select Table - Max Selection (keypress SPACE)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-max-count');
      browser.waitForVisible('table');
      // reset focusable point for keyboard navigation
      browser.click('[data-terra-table-header-cell]:nth-child(1)');
    });

    it('selects the first row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.it.matchesScreenshot('first-row', { viewports });

    it('selects the second row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.it.matchesScreenshot('second-row', { viewports });

    it('attempts to select the third row', () => {
      browser.keys(['Tab', 'Space']);
    });

    Terra.it.matchesScreenshot('third-row', { viewports });

    after(() => {
      // deselect the rows
      browser.click('[class*="row"]:nth-child(1)');
      browser.click('[class*="row"]:nth-child(2)');
    });
  });

  describe('Multi-Select Table - Initial Max Selection (onClick)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-max-count-initially-met');
      browser.waitForVisible('table');
      browser.click('[class*="row"]:nth-child(3)');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Multi-Select Table - Initial Max Selection (keypress)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-max-count-initially-met');
      browser.waitForVisible('table');
      // reset focusable point for keyboard navigation
      browser.click('[data-terra-table-header-cell]:nth-child(1)');
      browser.click('[class*="row"]:nth-child(3)');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Multi-Select Table - Initial Max Exceeded (onClick)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-max-count-initially-exceeded');
      browser.waitForVisible('table');
      browser.click('[class*="row"]:nth-child(3)');
    });

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Multi-Select Table - Initial Max Exceeded (keypress)', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/multi-select-table/multi-row-selectable-table-max-count-initially-exceeded');
      browser.waitForVisible('table');
      // reset focusable point for keyboard navigation
      browser.click('[data-terra-table-header-cell]:nth-child(1)');
      browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Enter']);
    });

    Terra.it.matchesScreenshot({ viewports });
  });
});
