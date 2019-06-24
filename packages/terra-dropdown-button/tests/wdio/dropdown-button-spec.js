Terra.describeViewports('Dropdown Button', ['tiny', 'medium', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-dropdown-button/default-dropdown-button'));

    it('validates the element', () => {
      Terra.validates.element();
    });
  });
});
