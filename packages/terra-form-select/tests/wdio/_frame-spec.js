Terra.describeViewports('Frame', ['tiny'], () => {
  describe('should have a themeable disabled icon', () => {
    before(() => browser.url('/#/raw/tests/terra-form-select/form-select/disabled'));

    Terra.it.validatesElement();
  });
});
