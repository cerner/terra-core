Terra.describeViewports('OutlineViewTable', ['medium'], () => {
  it('displays outline view table', () => {
    browser.url('/raw/tests/terra-outline-view-table/outline-view-table/outline-view-table');
    Terra.validates.element('default');
  });
});
