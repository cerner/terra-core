Terra.describeViewports('Table', ['medium'], () => {
  describe('Table Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/table'));
    Terra.it.validatesElement();
  });

  describe('HeaderFooter Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/header-footer'));
    Terra.it.validatesElement();
  });

  describe('Padding Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/padding'));
    Terra.it.validatesElement();
  });

  describe('HeaderRow Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/header-row'));
    Terra.it.validatesElement();
  });

  describe('HeaderCell Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/header-cell'));
    Terra.it.validatesElement();
  });

  describe('Row Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/row'));
    Terra.it.validatesElement('Table');

    it('Hover', () => browser.moveToObject('#selectable-row'));

    Terra.it.validatesElement('Table-Hover');
  });

  describe('Cell Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/cell'));
    Terra.it.validatesElement();
  });

  describe('Section Test', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/section'));
    Terra.it.validatesElement('TableSection');

    it('Hover', () => browser.moveToObject('#test-header'));

    Terra.it.validatesElement('TableSection-Hover');
  });
});
