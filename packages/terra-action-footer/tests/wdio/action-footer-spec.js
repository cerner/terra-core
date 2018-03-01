/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium', 'large');

describe('ActionFooter', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/action-footer/default-action-footer'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
