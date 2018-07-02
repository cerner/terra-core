/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('FilterView', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-filter-view/default-filter-view'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
