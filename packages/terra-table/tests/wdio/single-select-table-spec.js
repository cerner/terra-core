Terra.describeViewports('Single-Select Table', ['medium'], () => {
  describe('Single-Select Table - Interactions', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-table/table/single-select-table/selectable-table');
      browser.waitForVisible('table');
    });

    describe('Single-Select Table - Click Operations', () => {
      it('selects the second row', () => {
        browser.click('[class*="row"]:nth-child(1)');
      });

      Terra.it.validatesElement('first-row');

      it('selects the second row', () => {
        browser.click('[class*="row"]:nth-child(2)');
      });

      Terra.it.matchesScreenshot('second-row');

      it('selects the third row', () => {
        browser.click('[class*="row"]:nth-child(3)');
      });

      Terra.it.matchesScreenshot('third-row');
    });

    describe('Single-Select Table - Keyboard ENTER key', () => {
      // reset focusable point for keyboard navigation
      before(() => {
        browser.click('[data-terra-table-header-cell]:nth-child(1)');
        browser.pause(50);
      });

      it('selects the first row', () => {
        browser.keys(['Tab', 'Enter']);
      });

      Terra.it.validatesElement('first-row');

      it('selects the second row', () => {
        browser.keys(['Tab', 'Enter']);
      });

      Terra.it.matchesScreenshot('second-row');

      it('selects the third row', () => {
        browser.keys(['Tab', 'Enter']);
      });

      Terra.it.matchesScreenshot('third-row');
    });

    describe('Single-Select Table - Keyboard SPACE key', () => {
      // reset focusable point for keyboard navigation
      before(() => {
        browser.click('[data-terra-table-header-cell]:nth-child(1)');
        browser.pause(50);
      });

      it('selects the first row', () => {
        browser.keys(['Tab', 'Space']);
      });

      Terra.it.validatesElement('first-row');

      it('selects the second row', () => {
        browser.keys(['Tab', 'Space']);
      });

      Terra.it.matchesScreenshot('second-row');

      it('selects the third row', () => {
        browser.keys(['Tab', 'Space']);
      });

      Terra.it.matchesScreenshot('third-row');
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

    Terra.it.matchesScreenshot('first-row');

    it('selects the second row', () => {
      browser.click('[class*="row"]:nth-child(2)');
    });

    Terra.it.matchesScreenshot('second-row');

    it('selects the third row', () => {
      browser.click('[class*="row"]:nth-child(3)');
    });

    Terra.it.matchesScreenshot('third-row');
  });

  describe('Single-Select Table - Preselected', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/single-select-table/single-row-selectable-table-preselected'));

    Terra.it.validatesElement();
  });

  describe('Single-Select Table - No Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/single-select-table/single-row-selectable-table-non-selectable'));

    Terra.it.validatesElement();
  });
});
