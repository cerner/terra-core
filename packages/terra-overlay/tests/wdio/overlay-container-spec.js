describe('Overlay Container Default', () => {
  before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay-container/default-overlay-container'));

  Terra.should.beAccessible();
  Terra.should.matchScreenshot();
});
