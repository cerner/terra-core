Terra.describeViewports('Status', ['medium'], () => {
  it('should display default Status', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status/status-default');

    Terra.validates.element('default');
  });

  it('should display Status with arrange', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status/status-arrange');

    Terra.validates.element('arrange');
  });

  it('should display status with icon', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status/status-icon');

    Terra.validates.element('icon');
  });

  it('should display Status with image', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status/status-image');

    Terra.validates.element('image');
  });

  it('should display Status with no color', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status/status-no-color');

    Terra.validates.element('no color');
  });
});
