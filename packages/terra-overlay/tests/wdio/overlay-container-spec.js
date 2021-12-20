Terra.describeViewports('Overlay Container', ['huge'], () => {
  it('should display default Overlay Container', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/overlay/overlay-container/default-overlay-container');

    Terra.validates.element('default');
  });
});
