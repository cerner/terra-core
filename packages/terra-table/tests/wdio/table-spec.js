Terra.describeViewports('Table', ['medium'], () => {
  describe('Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/fill'));
    Terra.it.validatesElement();
  });
  describe('HeaderCheckMark', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/header-check-mark'));
    Terra.it.validatesElement();
  });
  describe('HeaderFooter', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/header-footer'));
    Terra.it.validatesElement();
  });
  describe('Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/padding'));
    Terra.it.validatesElement();
  });
  describe('Row', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/row'));
    Terra.it.validatesElement();
  });
  describe('Section', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/section'));
    Terra.it.validatesElement();
  });
  describe('Striped', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/striped'));
    Terra.it.validatesElement();
  });
  describe('Custom Cell Content', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/custom-cell'));
    Terra.it.validatesElement();
  });
  describe('Multi Demo', () => {
    before(() => browser.url('/#/raw/tests/terra-table/table/multi-demo'));
    Terra.it.validatesElement();
  });
});
