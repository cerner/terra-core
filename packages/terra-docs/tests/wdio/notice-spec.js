Terra.describeViewports('Notice', ['medium'], () => {
  describe('Default notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/deprecation-notice');
      Terra.validates.element();
    });
  });
});
