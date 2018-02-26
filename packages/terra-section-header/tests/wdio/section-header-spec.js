/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('SectionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/section-header/default-section-header'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
