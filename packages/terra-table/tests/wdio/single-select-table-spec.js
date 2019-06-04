const viewports = Terra.viewports('medium');

describe('Single-Select Table', () => {
  describe('Single-Select Table - Interactions', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/single-select-table/selectable-table');
      browser.waitForVisible('table');
    });

    // reset focusable point for keyboard navigation
    beforeEach(() => browser.click('[data-terra-table-header-cell]:nth-child(1)'));

    describe('Single-Select Table - Click Operations', () => {
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
    });

    describe('Single-Select Table - Keyboard ENTER key', () => {
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
    });

    describe('Single-Select Table - Keyboard SPACE key', () => {
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
    });
  });

  describe('Single-Select Table - onChange operations', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/single-select-table/single-row-selectable-table-on-change');
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

  describe('Single-Select Table - Preselected', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/single-select-table/single-row-selectable-table-preselected'));

    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Single-Select Table - No Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/single-select-table/single-row-selectable-table-non-selectable'));

    Terra.it.matchesScreenshot({ viewports });
  });
});
