const viewports = Terra.viewports('medium');

viewports.forEach((viewport) => {
  describe('TableCellGrid', () => {
    before(() => {
      browser.setViewportSize(viewport);
    });

    describe('TableCellGrid Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/table-cell-grid'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('Padding Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/padding'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('HeaderCellGrid Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/header-cell-grid'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('CellGrid Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/cell-grid'));

      Terra.should.matchScreenshot('TableRow');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#selectable-row'));

      Terra.should.matchScreenshot('TableRow-Hover');
    });

    describe('Section Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/section'));

      Terra.should.matchScreenshot('TableSection');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#test-header'));

      Terra.should.matchScreenshot('TableSection-Hover');
    });

    describe('Subsection Test', () => {
      before(() => browser.url('/#/raw/tests/terra-table-cell-grid/table-cell-grid/subsection'));

      Terra.should.matchScreenshot('TableSubsection');
      Terra.should.beAccessible();

      it('Hover', () => browser.moveToObject('#test-header'));

      Terra.should.matchScreenshot('TableSubsection-Hover');
    });
  });
});
