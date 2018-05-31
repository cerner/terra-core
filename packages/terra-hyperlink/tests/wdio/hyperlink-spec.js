/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('Hyperlink', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-hyperlink/default-hyperlink'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
