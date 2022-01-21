Terra.describeViewports('Table', ['medium'], () => {
  it('displays table with Fill', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/fill');
    Terra.validates.element('fill');
  });
  it('displays table with HeaderCheckMark', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/header-check-mark');
    Terra.validates.element('header check mark');
  });
  it('displays table with HeaderFooter', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/header-footer');
    Terra.validates.element('header footer');
  });
  it('displays table with Padding', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/padding');
    Terra.validates.element('padding');
  });
  it('displays Row', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/row');
    Terra.validates.element('row');
  });
  it('displays Section', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/section');
    Terra.validates.element('section');
  });
  it('displays Striped table', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/striped');
    Terra.validates.element('striped');
  });
  it('displays table with Custom Cell Content', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/custom-cell');
    Terra.validates.element('custom cell content');
  });
  it('displays a Multi Demo table', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/table/multi-demo');
    Terra.validates.element('multi demo');
  });
});
