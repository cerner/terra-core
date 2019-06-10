const viewports = Terra.viewports('tiny', 'large');

describe('Dialog', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-dialog/dialog/default-dialog'));
    Terra.it.matchesScreenshot({ viewports, selector: '#dialog' });
    Terra.it.isAccessible({ viewports });
  });
});
