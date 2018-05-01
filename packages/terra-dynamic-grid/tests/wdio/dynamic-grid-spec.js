/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('Dynamic Grid', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/dynamic-grid/default-dynamic-grid'));

    // Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
