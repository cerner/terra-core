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
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#terra-LoadingOverlay',
      properties: {
        '--terra-overlay-light-background-color': 'green',
        '--terra-overlay-light-background-image': 'linear-gradient(red, green)',
        '--terra-overlay-light-content-color': 'blue',
      },
    });
  });

  describe('Dark Loading Overlay Theme', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/dark-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#terra-LoadingOverlay',
      properties: {
        '--terra-overlay-dark-background-color': 'blue',
        '--terra-overlay-dark-background-image': 'linear-gradient(blue, green)',
        '--terra-overlay-dark-content-color': 'red',
      },
    });
  });

  describe('Clear Loading Overlay Theme', () => {
    before(() => browser.url('/#/raw/tests/terra-overlay/overlay/loading-overlay/clear-loading-overlay'));

    Terra.it.isAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.it.matchesScreenshot({ selector: '#terra-LoadingOverlay' });
    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      selector: '#terra-LoadingOverlay',
      properties: {
        '--terra-overlay-content-color': 'red',
        '--terra-overlay-content-padding-bottom': '500px',
        '--terra-overlay-content-padding-left': '500px',
        '--terra-overlay-content-padding-right': '500px',
        '--terra-overlay-content-padding-top': '500px',
      },
    });
  });
});
