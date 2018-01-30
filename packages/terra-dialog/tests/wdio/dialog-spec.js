/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('Dialog', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/dialog-tests/default'));
    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
