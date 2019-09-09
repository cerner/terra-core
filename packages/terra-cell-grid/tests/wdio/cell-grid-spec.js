Terra.describeViewports('Table', ['medium'], () => {
  describe('Cell Test', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/cell'));
    Terra.it.validatesElement();
  });

  describe('CellGrid Test', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/cell-grid'));
    Terra.it.validatesElement();
  });
});
