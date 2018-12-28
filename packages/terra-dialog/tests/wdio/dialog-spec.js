const viewports = Terra.viewports('tiny', 'large');

describe('Dialog', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-dialog/dialog/default-dialog'));
    Terra.should.matchScreenshot({ viewports, selector: '[id=dialog]' });
    Terra.should.beAccessible({ viewports });
  });
});
