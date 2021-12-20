Terra.describeViewports('Loading Overlay', ['huge'], () => {
  it('should display default Loading Overlay', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/loading-overlay/default-loading-overlay');

    Terra.validates.element('default', { selector: '#terra-LoadingOverlay' });
  });

  it('should display Loading Overlay container', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/loading-overlay/container-loading-overlay');

    Terra.validates.element('container', { selector: '#terra-LoadingOverlay' });
  });

  it('should display Loading Overlay with custom message', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/loading-overlay/custom-message-loading-overlay');

    Terra.validates.element('custom message', { selector: '#terra-LoadingOverlay' });

    it('Expect default to have full screen', () => {
      expect($('#terra-LoadingOverlay')).toHaveAttributeContaining('class', 'fullscreen');
    });
  });

  it('should display animated Loading Overlay', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/loading-overlay/animated-loading-overlay');

    it('Expect Icon to be animated', () => {
      expect($('#terra-LoadingOverlay div svg')).toHaveAttributeContaining('class', 'is-spin');
    });
  });

  it('should display Loading Overlay with light theme', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/loading-overlay/light-loading-overlay');

    Terra.validates.element('light theme', { selector: '#terra-LoadingOverlay' });
  });

  it('should display Loading Overlay with dark theme', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/loading-overlay/dark-loading-overlay');

    Terra.validates.element('dark theme', { selector: '#terra-LoadingOverlay' });
  });

  it('should display Loading Overlay with clear theme', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/loading-overlay/clear-loading-overlay');

    Terra.validates.element('clear theme', { selector: '#terra-LoadingOverlay' });
  });
});
