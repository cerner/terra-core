/* global browser, Terra, before */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ShowHide', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-show-hide/default-show-hide'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
