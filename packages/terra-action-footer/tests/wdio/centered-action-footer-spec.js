Terra.describeViewports('CenteredActionFooter', ['small', 'medium'], () => {
  it('displays CenteredActionFooter with multiple actions', () => {
    browser.url('/#/raw/tests/terra-action-footer/action-footer/multiple-action-centered-action-footer');

    Terra.validates.element('multiple actions');
  });

  it('displays CenteredActionFooter with single action', () => {
    browser.url('/#/raw/tests/terra-action-footer/action-footer/single-action-centered-action-footer');

    Terra.validates.element('single action');
  });
});
