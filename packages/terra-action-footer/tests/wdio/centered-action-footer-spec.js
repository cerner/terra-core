Terra.describeViewports('CenteredActionFooter', ['small', 'medium'], () => {
  describe('Multiple Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-action-centered-action-footer'));

    Terra.it.validatesElement();
  });

  describe('Single Action', () => {
    before(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/single-action-centered-action-footer'));

    Terra.it.validatesElement();
  });
});
