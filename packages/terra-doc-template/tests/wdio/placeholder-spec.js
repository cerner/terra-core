Terra.describeViewports('Placeholder', ['medium'], () => {
  describe('Default Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/default-placeholder'));

    Terra.it.validatesElement();
  });

  describe('Light Placeholder', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/light-placeholder'));

    Terra.it.validatesElement();
  });
});
