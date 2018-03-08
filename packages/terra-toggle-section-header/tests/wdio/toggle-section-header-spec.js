/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ToggleSectionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/toggle-section-header/default-toggle-section-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
