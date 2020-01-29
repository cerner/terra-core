Terra.describeViewports('HTML Table', ['medium'], () => {
  describe('No Striped', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/no-striped-table'));
    Terra.it.validatesElement();
  });

  describe('Non Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/no-padding-table'));
    Terra.it.validatesElement();
  });

  describe('Compact Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/compact-padding-table'));
    Terra.it.validatesElement();
  });

  describe('Standard Padding', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/standard-padding-table'));
    Terra.it.validatesElement();
  });

  describe('Single Row', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/single-row-table'));
    Terra.it.validatesElement();
  });

  describe('No Rows', () => {
    before(() => browser.url('/#/raw/tests/terra-html-table/html-table/table-no-rows'));
    Terra.it.validatesElement();
  });
});
