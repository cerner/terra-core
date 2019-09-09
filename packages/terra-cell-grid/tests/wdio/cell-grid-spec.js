Terra.describeViewports('CellGrid', ['medium'], () => {
  describe('Cell Test', () => {
    before(() => browser.url('/#/raw/tests/terra-cell-grid/cell-grid/cell'));
    Terra.it.validatesElement();
  });

  describe('CellGrid Test', () => {
    before(() => browser.url('/#/raw/tests/terra-cell-grid/cell-grid/cell-grid'));
    Terra.it.validatesElement();
  });
});
