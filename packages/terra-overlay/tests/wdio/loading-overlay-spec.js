describe('Loading Overlay', () => {
  describe('Loading Overlay Default', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/default-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });

    it('Expect default to have full screen', () => {
      expect(browser.getAttribute('#terra-LoadingOverlay', 'class')).contains('fullscreen');
    });
  });

  describe('Loading Overlay Container', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/container-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });
  });

  describe('Loading Custom Message', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/custom-message-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });
  });

  describe('Animated', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/animated-loading-overlay'));

    it('Expect Icon to be animated', () => {
      expect(browser.getAttribute('#terra-LoadingOverlay div svg', 'class')).contains('is-spin');
    });
  });

  describe('Light Loading Theme', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/light-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });
  });

  describe('Dark Loading Overlay Theme', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/dark-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });
  });

  describe('Clear Loading Overlay Theme', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/clear-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });
  });
});
