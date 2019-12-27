Terra.describeViewports('Switch', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-switch/default-switch'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
