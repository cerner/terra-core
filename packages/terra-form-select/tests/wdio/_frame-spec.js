Terra.describeViewports('Frame', ['tiny'], () => {
  it('should have a themeable disabled icon', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/form-select/disabled');

    Terra.validates.element('themeable disabled icon');
  });
});
