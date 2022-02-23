Terra.describeViewports('IconCollectionTable', ['medium'], () => {
  describe('IconCollectionTable', () => {
    it('is valid and scrolls at medium width', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/icon-collection-table/icon-collection-table');
      Terra.validates.element('icon-library-table');
    });
  });
});

Terra.describeViewports('IconCollectionTable', ['large'], () => {
  describe('IconCollectionTable', () => {
    it('is valid at large width', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/icon-collection-table/icon-collection-table');
      Terra.validates.element('icon-library-table');
    });
  });
});