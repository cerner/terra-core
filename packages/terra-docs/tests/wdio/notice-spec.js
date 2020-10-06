Terra.describeViewports('Notice', ['medium'], () => {
  describe('Deprecation notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/deprecation-notice');
      Terra.validates.element();
    });
  });

  describe('Maintenance notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/maintenance-notice');
      Terra.validates.element();
    });
  });

  describe('Important notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/important-notice');
      Terra.validates.element();
    });
  });

  describe('UX Recommendation notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/ux-recommendation-notice');
      Terra.validates.element();
    });
  });

  describe('Caution notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/caution-notice');
      Terra.validates.element();
    });
  });

  describe('MDX notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/mdx-notice');
      Terra.validates.element();
    });
  });
});
