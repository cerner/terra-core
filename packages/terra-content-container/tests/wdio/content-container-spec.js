Terra.describeViewports('Content Container', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-content-container/content-container/default-content-container'));

    Terra.it.validatesElement();
  });

  describe('Fill', () => {
    before(() => browser.url('/#/raw/tests/terra-content-container/content-container/fill-content-container'));

    Terra.it.validatesElement();
  });
});
