Terra.describeViewports('Dynamic Grid', ['tiny', 'huge'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-dynamic-grid/dynamic-grid/default-dynamic-grid'));

    Terra.it.validatesElement();
  });

  describe('Large Template', () => {
    before(() => browser.url('/#/raw/tests/terra-dynamic-grid/dynamic-grid/large-dynamic-grid'));

    Terra.it.validatesElement();
  });
});
