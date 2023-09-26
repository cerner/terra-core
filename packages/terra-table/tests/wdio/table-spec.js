Terra.describeViewports('Table', ['medium', 'large'], () => {
  describe('Default Table', () => {
    it('Validates the default table', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/default-table');
      Terra.validates.element('default-table', '#default-terra-table');
    });
  });

  describe('No Interaction Table', () => {
    it('Validates the default table is not interactable', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/no-interaction-table');
      browser.keys(['Tab']);
      $('#focused-button').isFocused();
      Terra.validates.element('no-interaction-table', '#no-interaction-test-container');
    });
  });

  describe('Empty Table', () => {
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/table-with-no-rows');
    });

    it('verifies that a table renders with no rows', () => {
      Terra.validates.element('table-no-rows', '#table-with-no-rows');
    });
  });

  describe('Pinned Columns Table', () => {
    const pinnedColumnsSelector = '#table-pinned-columns';
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/table-pinned-columns');
    });

    it('adds pinned columns', () => {
      Terra.validates.element('pinned-columns', { selector: pinnedColumnsSelector });
    });

    it('keeps pinned columns stickied when scrolling', () => {
      const testScript = 'document.querySelector(\'div[class*="table-container"\').scrollBy(150,0)';
      browser.execute(testScript);
      Terra.validates.element('pinned-columns-scroll', { selector: pinnedColumnsSelector });
    });
  });

  describe('Sticky Header Table', () => {
    const stickyHeaderSelector = '#table-sticky-header';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/table-sticky-header');
    });

    it('verifies un-scrolled sticky header table', () => {
      Terra.validates.element('sticky-header-unscrolled', { selector: stickyHeaderSelector });
    });

    it('verifies that the table column header is fixed when scrolling', () => {
      const testScript = 'document.querySelector(\'div[class*="table-container"\').scrollBy(0, 15)';
      browser.execute(testScript);
      browser.pause(250);
      Terra.validates.element('sticky-header-scrolled', { selector: stickyHeaderSelector });
    });
  });

  describe('Sortable Table', () => {
    const sortableTableSelector = '#sortable-table';
    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/sortable-table');
    });

    it('Validates the selectable column header is focusable', () => {
      browser.keys(['Tab']);
      Terra.validates.element('sortable-table-focused-header', { selector: sortableTableSelector });
    });

    it('Validates the selectable column header is sortable with keyboard', () => {
      browser.keys(['Tab', 'Space']);
      Terra.validates.element('sortable-table-keyboard', { selector: sortableTableSelector });
    });
  });
});
