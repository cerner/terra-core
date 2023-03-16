Terra.describeViewports('TerraTestComp', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-terra-test-comp/terra-test-comp/default-terra-test-comp'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
