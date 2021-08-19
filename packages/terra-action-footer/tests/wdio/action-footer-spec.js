Terra.describeViewports('ActionFooter', ['small', 'medium'], () => {
  it('displays ActionFooter with multiple end actions', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-footer/multiple-end-action-footer');

    Terra.validates.element('multiple end actions');
  });

  it('displays ActionFooter with multiple start actions', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-footer/multiple-start-action-footer');

    Terra.validates.element('multiple start actions');
  });

  it('displays ActionFooter with single end action', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-footer/single-end-action-footer');

    Terra.validates.element('single end action');
  });

  it('displays ActionFooter with single start action', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-footer/single-start-action-footer');

    Terra.validates.element('single start action');
  });

  it('displays ActionFooter with single start and end action', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/action-footer/single-start-end-action-footer');

    Terra.validates.element('single start and end action');
  });
});
