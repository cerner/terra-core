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

  describe('Note notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/note-notice');
      Terra.validates.element();
    });
  });

  describe('Best Practice notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/best-practice-notice');
      Terra.validates.element();
    });
  });

  describe('Caution notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/terra-docs/docs/caution-notice');
      Terra.validates.element();
    });
  });
});
