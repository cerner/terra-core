Terra.describeViewports('BlockActionFooter', ['small', 'medium'], () => {
  describe('No Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/without-actions-block-action-footer'));

    Terra.it.validatesElement();
  });

  describe('With Actions', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-action-footer/action-footer/with-actions-block-action-footer'));

    Terra.it.validatesElement();
  });
});
