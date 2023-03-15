Terra.describeViewports('TerraTestComp', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/raw/tests/terra-TerraTestComp/TerraTestComp/default-TerraTestComp'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
