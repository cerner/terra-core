Terra.describeViewports('BlockActionFooter', ['small', 'medium'], () => {
  it('displays BlockActionFooter with no actions', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-footer/without-actions-block-action-footer');

    Terra.validates.element('no actions');
  });

  it('displays BlockActionFooter with actions', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-footer/with-actions-block-action-footer');

    Terra.validates.element('with actions');
  });
});
