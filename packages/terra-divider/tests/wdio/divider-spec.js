Terra.describeViewports('Divider', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/default-divider'));

    Terra.it.validatesElement();
  });

  describe('Custom Text', () => {
    before(() => browser.url('/#/raw/tests/terra-divider/divider/divider-with-text'));

    Terra.it.validatesElement();
  });
});
