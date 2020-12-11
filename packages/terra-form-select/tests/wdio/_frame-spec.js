Terra.describeViewports('Frame', ['tiny'], () => {
  it('should have a themeable disabled icon', () => {
    browser.url('/raw/tests/terra-form-select/form-select/disabled');

    Terra.validates.element('themeable disabled icon');
  });
});
