/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'huge');

describe('Dynamic Grid', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-dynamic-grid/dynamic-grid/default-dynamic-grid'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Large Template', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-dynamic-grid/dynamic-grid/large-dynamic-grid'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
