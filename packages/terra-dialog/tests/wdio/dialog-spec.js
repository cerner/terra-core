Terra.describeViewports('Dialog', ['tiny', 'large'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-dialog/dialog/default-dialog'));
    Terra.it.validatesElement({ selector: '#dialog' });
  });
});
