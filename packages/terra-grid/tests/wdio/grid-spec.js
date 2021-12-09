Terra.describeViewports('Grid', ['medium'], () => {
  it('should display default Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-default');

    Terra.validates.element('default');
  });

  it('should display responsive Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-responsive');

    Terra.validates.element('responsive');
  });

  it('should display nested Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-nested');

    Terra.validates.element('nested');
  });
});

Terra.describeViewports('Grid', ['tiny', 'huge'], () => {
  it('should display tiny Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-tiny');
    Terra.validates.element('tiny');
  });
});

Terra.describeViewports('Grid', ['tiny', 'medium'], () => {
  it('should display small Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-small');
    Terra.validates.element('small');
  });
});

Terra.describeViewports('Grid', ['small', 'large'], () => {
  it('should display medium Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-medium');
    Terra.validates.element('medium');
  });
});

Terra.describeViewports('Grid', ['medium', 'huge'], () => {
  it('should display large Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-large');
    Terra.validates.element('large');
  });
});

Terra.describeViewports('Grid', ['large', 'enormous'], () => {
  it('should display huge Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-huge');
    Terra.validates.element('huge');
  });
});

Terra.describeViewports('Grid', ['huge', 'enormous'], () => {
  it('should display enormous Grid', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/grid/grid-enormous');
    Terra.validates.element('enormous');
  });
});
