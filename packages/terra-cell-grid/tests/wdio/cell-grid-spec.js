Terra.describeViewports('CellGrid', ['medium'], () => {
  it('Cell test', () => {
    browser.url('/raw/tests/terra-cell-grid/cell-grid/cell');
    Terra.validates.element('cell');
  });

  it('CellGrid test', () => {
    browser.url('/raw/tests/terra-cell-grid/cell-grid/cell-grid');
    Terra.validates.element('cell-grid');
  });

  it('CellGridDivider test', () => {
    browser.url('/raw/tests/terra-cell-grid/cell-grid/cell-grid-divider');
    Terra.validates.element('cell-grid-divider');
  });
});
