/* global before, browser, Terra */

describe('Overlay Container Default', () => {
  before(() => browser.url('/#/tests/overlay-container-tests/default'));

  Terra.should.beAccessible();
  Terra.should.matchScreenshot();

  it('Check for tabindex value', () => {
    expect(browser.getAttribute('#terra-OverlayContainer', 'tabIndex')).to.equal('-1');
  });
});
