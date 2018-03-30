/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'medium');

describe('Divider', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/divider/default-divider'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });
});
