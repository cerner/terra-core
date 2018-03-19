/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('Dialog', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/dialog/default-dialog'));
    Terra.should.matchScreenshot({ viewports, selector: '#dialog' });
    Terra.should.beAccessible({ viewports });
  });
});
