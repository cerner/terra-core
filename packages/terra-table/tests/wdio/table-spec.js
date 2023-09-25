Terra.describeViewports('Table', ['medium', 'large'], () => {
  describe('Default Table', () => {
    it('Validates the default table', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/default-table');
      Terra.validates.element('default-table', '#default-terra-table');
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

  describe('with pinned columns', () => {
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

  describe('with sticky column header', () => {
    const stickyHeaderSelector = '#table-sticky-header';

    beforeEach(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/table/table-sticky-header');
    });

    it('verifies un-scrolled sticky header table', () => {
      Terra.validates.element('sticky-header-unscrolled', { selector: stickyHeaderSelector });
    });

    it('verifies that the table column header is fixed when scrolling', () => {
      const testScript = 'document.querySelector(\'div[class*="table-container"\').scrollBy(0, 100)';
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

    it('Validates the table is sortable', () => {
      $(`${sortableTableSelector} th`).click();
      Terra.validates.element('sortable-table', { selector: sortableTableSelector });
    });
  });
});
