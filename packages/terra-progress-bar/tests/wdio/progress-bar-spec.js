Terra.describeViewports('Progress Bar', ['medium'], () => {
  it('should display default Progress Bar with label', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/progress-bar/progress-bar-default');

    Terra.validates.element('default');
  });

  it('should display Progress Bar sizes', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/progress-bar/progress-bar-size');

    Terra.validates.element('size');
  });

  it('should display Progress Bar with colors', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/progress-bar/progress-bar-color');

    Terra.validates.element('color');
  });

  it('should display customized Progress Bar', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/progress-bar/progress-bar-customized-colors');

    Terra.validates.element('customized');
  });
});
