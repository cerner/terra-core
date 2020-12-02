Terra.describeViewports('Table', ['medium'], () => {
  it('displays table with Fill', () => {
    browser.url('/raw/tests/terra-table/table/fill');
    Terra.validates.element('fill');
  });
  it('displays table with HeaderCheckMark', () => {
    browser.url('/raw/tests/terra-table/table/header-check-mark');
    Terra.validates.element('header check mark');
  });
  it('displays table with HeaderFooter', () => {
    browser.url('/raw/tests/terra-table/table/header-footer');
    Terra.validates.element('header footer');
  });
  it('displays table with Padding', () => {
    browser.url('/raw/tests/terra-table/table/padding');
    Terra.validates.element('padding');
  });
  it('displays Row', () => {
    browser.url('/raw/tests/terra-table/table/row');
    Terra.validates.element('row');
  });
  it('displays Section', () => {
    browser.url('/raw/tests/terra-table/table/section');
    Terra.validates.element('section');
  });
  it('displays Striped table', () => {
    browser.url('/raw/tests/terra-table/table/striped');
    Terra.validates.element('striped');
  });
  it('displays table with Custom Cell Content', () => {
    browser.url('/raw/tests/terra-table/table/custom-cell');
    Terra.validates.element('custom cell content');
  });
  it('displays a Multi Demo table', () => {
    browser.url('/raw/tests/terra-table/table/multi-demo');
    Terra.validates.element('multi demo');
  });
});
