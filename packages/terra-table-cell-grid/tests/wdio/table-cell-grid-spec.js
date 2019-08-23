Terra.describeViewports('TableCellGrid', ['medium'], () => {
  describe('TableCellGrid Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/table-cell-grid'));
    Terra.it.validatesElement();
  });

  describe('HeaderFooter Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/header-footer'));
    Terra.it.validatesElement();
  });

  describe('Padding Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/padding'));
    Terra.it.validatesElement();
  });

  describe('HeaderCellGrid Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/header-cell-grid'));
    Terra.it.validatesElement();
  });

  describe('HeaderCell Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/header-cell'));
    Terra.it.validatesElement();
  });

  describe('CellGrid Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/cell-grid'));
    Terra.it.validatesElement('CellGrid');

    it('Hover', () => browser.moveToObject('#selectable-row'));

    Terra.it.validatesElement('CellGrid-Hover');
  });

  describe('Cell Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/cell'));
    Terra.it.validatesElement();
  });

  describe('Section Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/section'));
    Terra.it.validatesElement('TableSection');

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.it.validatesElement('TableSection-Hover');
  });

  describe('Subsection Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/subsection'));
    Terra.it.validatesElement('TableSubsection');
    
    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.it.validatesElement('TableSubsection-Hover');
  });
});
