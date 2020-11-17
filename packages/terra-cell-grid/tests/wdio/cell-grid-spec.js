Terra.describeViewports('CellGrid', ['medium'], () => {
  it('should render grid cell', () => {
    browser.url('/raw/tests/terra-cell-grid/cell-grid/cell');
    Terra.validates.element('cell');
  });

  it('should render a cell-grid', () => {
    browser.url('/raw/tests/terra-cell-grid/cell-grid/cell-grid');
    Terra.validates.element('cell-grid');
  });

  it('should render cell-grid divider', () => {
    browser.url('/raw/tests/terra-cell-grid/cell-grid/cell-grid-divider');
    Terra.validates.element('cell-grid-divider');
  });
});
