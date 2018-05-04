/* global browser, Terra, before */

describe('Spacer', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/spacer/default-spacer'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
