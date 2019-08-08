Terra.describeViewports('NpmBadge', ['medium'], () => {
  describe('Npm Badge Variants', () => {
    before(() => browser.url('/#/raw/tests/terra-doc-template/doc-template/npm-badge'));

    Terra.it.matchesScreenshot('Badge variants display correctly');
  });
});
