Terra.describeViewports('Overlay Container Default', ['huge'], () => {
  before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay-container/default-overlay-container'));

  Terra.it.validatesElement();
});
