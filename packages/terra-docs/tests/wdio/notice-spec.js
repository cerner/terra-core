Terra.describeViewports('Notice', ['medium'], () => {
  describe('Deprecation notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/deprecation-notice');
      Terra.validates.element('deprecation');
    });
  });

  describe('Maintenance notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/maintenance-notice');
      Terra.validates.element('maintenance');
    });
  });

  describe('Important notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/important-notice');
      Terra.validates.element('important');
    });
  });

  describe('UX Recommendation notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/ux-recommendation-notice');
      Terra.validates.element('ux recommendation');
    });
  });

  describe('Caution notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/caution-notice');
      Terra.validates.element('caution');
    });
  });

  describe('MDX notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/mdx-notice');
      Terra.validates.element('mdx');
    });
  });

  describe('Not Supported notice', () => {
    it('checks accessibility', () => {
      browser.url('/raw/tests/cerner-terra-docs/docs/not-supported-notice');
      Terra.validates.element('not supported');
    });
  });
});
