Terra.describeViewports('HTML Table', ['medium'], () => {
  it('should display no striped HTML Table', () => {
    browser.url('/raw/tests/terra-html-table/html-table/no-striped-table');

    Terra.validates.element('no striped');
  });

  it('should display HTML Table with no padding', () => {
    browser.url('/raw/tests/terra-html-table/html-table/no-padding-table');

    Terra.validates.element('no padding');
  });

  it('should display HTML Table with compact padding', () => {
    browser.url('/raw/tests/terra-html-table/html-table/compact-padding-table');

    Terra.validates.element('compact padding');
  });

  it('should display HTML Table with standard padding', () => {
    browser.url('/raw/tests/terra-html-table/html-table/standard-padding-table');

    Terra.validates.element('standard padding');
  });

  it('should display single row', () => {
    browser.url('/raw/tests/terra-html-table/html-table/single-row-table');

    Terra.validates.element('single row');
  });

  it('should display no rows', () => {
    browser.url('/raw/tests/terra-html-table/html-table/table-no-rows');

    Terra.validates.element('no rows');
  });
});
