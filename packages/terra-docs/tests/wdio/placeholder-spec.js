Terra.describeViewports('Placeholder', ['medium'], () => {
  describe('Default Placeholder', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/placeholder');
      Terra.validates.element();
    });
  });
});
