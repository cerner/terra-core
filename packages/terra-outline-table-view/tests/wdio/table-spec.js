Terra.describeViewports('Table', ['medium'], () => {
  it('displays outline table view', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/outline-table-view/outline-table-view');
    Terra.validates.element('default');
  });
});
