const viewports = Terra.viewports('medium');

describe('Table', () => {
  describe('Non Striped Table', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/no-striped-table'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Striped', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/striped-table'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Non Padded Table', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/no-padding-table'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Sort Indicator', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-with-sort-indicator'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Highlighted Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-with-highlighted-rows'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Subheaders', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-with-subheaders'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('Single Row', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/single-row-table'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });

  describe('No Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table/table-no-rows'));

    Terra.it.matchesScreenshot({ viewports });
    Terra.it.isAccessible({ viewports });
  });
});
