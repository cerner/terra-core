Terra.describeViewports('Table', ['medium'], () => {
  it('displays outline table view', () => {
    browser.url('/raw/tests/terra-outline-table-view/outline-table-view/outline-table-view');
    Terra.validates.element('default');
  });
});
