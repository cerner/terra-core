/* global before, browser, Terra */

describe('Loading Overlay', () => {
  describe('Loading Overlay Default', () => {
    before(() => browser.url('/#/tests/loading-overlay-tests/default'));

    Terra.should.beAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.should.matchScreenshot({ selector: '#terra-LoadingOverlay' });

    it('Expect default to have full screen', () => {
      expect(browser.getAttribute('#terra-LoadingOverlay', 'class')).contains('fullscreen');
    });
  });

  describe('Loading Overlay Container', () => {
    before(() => browser.url('/#/tests/loading-overlay-tests/container'));

    Terra.should.beAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.should.matchScreenshot({ selector: '#terra-LoadingOverlay' });
  });

  describe('Loading Custom Message', () => {
    before(() => browser.url('/#/tests/loading-overlay-tests/custom-message'));

    Terra.should.beAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.should.matchScreenshot({ selector: '#terra-LoadingOverlay' });
  });

  describe('Animated', () => {
    before(() => browser.url('/#/tests/loading-overlay-tests/animated'));

    it('Expect Icon to be animated', () => {
      expect(browser.getAttribute('#terra-LoadingOverlay div svg', 'class')).contains('is-spin');
    });
  });

  describe('Light Loading Theme', () => {
    before(() => browser.url('/#/tests/loading-overlay-tests/light-themed'));

    Terra.should.beAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.should.matchScreenshot({ selector: '#terra-LoadingOverlay' });
    Terra.should.themeEachCustomProperty(
      '#terra-LoadingOverlay',
      {
        '--terra-overlay-light-background-color': 'green',
        '--terra-overlay-light-background-image': 'linear-gradient(red, green)',
        '--terra-overlay-light-content-color': 'blue',
      },
  );
  });

  describe('Dark Loading Overlay Theme', () => {
    before(() => browser.url('/#/tests/loading-overlay-tests/dark-themed'));

    Terra.should.beAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.should.matchScreenshot({ selector: '#terra-LoadingOverlay' });
    Terra.should.themeEachCustomProperty(
    '#terra-LoadingOverlay',
      {
        '--terra-overlay-dark-background-color': 'blue',
        '--terra-overlay-dark-background-image': 'linear-gradient(blue, green)',
        '--terra-overlay-dark-content-color': 'red',
      },
    );
  });

  describe('Clear Loading Overlay Theme', () => {
    before(() => browser.url('/#/tests/loading-overlay-tests/clear-themed'));

    Terra.should.beAccessible({ selector: '#terra-LoadingOverlay' });
    Terra.should.matchScreenshot({ selector: '#terra-LoadingOverlay' });
    Terra.should.themeEachCustomProperty(
    '#terra-LoadingOverlay',
      {
        '--terra-overlay-content-color': 'red',
        '--terra-overlay-content-padding-bottom': '500px',
        '--terra-overlay-content-padding-left': '500px',
        '--terra-overlay-content-padding-right': '500px',
        '--terra-overlay-content-padding-top': '500px',
      },
    );
  });
});
