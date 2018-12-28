describe('Overlay Container Default', () => {
  before(() => browser.url('/#/raw/tests/terra-overlay/overlay/overlay-container/default-overlay-container'));

  Terra.should.beAccessible();
  Terra.should.matchScreenshot();

  it('Check for tabindex value', () => {
    expect(browser.getAttribute('[id=terra-OverlayContainer]', 'tabIndex')).to.equal('-1');
  });
});
