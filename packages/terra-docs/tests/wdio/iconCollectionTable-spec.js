Terra.describeViewports('IconCollectionTable', ['large'], () => {
  describe('IconCollectionTable', () => {
    it('is valid', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/icon-collection-table/icon-collection-table');
      Terra.validates.element('icon-library-table');
    });
  });
});
