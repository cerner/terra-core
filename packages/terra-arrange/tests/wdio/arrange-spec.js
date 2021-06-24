Terra.describeViewports('Arrange', ['tiny', 'medium'], () => {
  it('displays Arrange with aligned all', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/aligned-all-arrange');
    Terra.validates.element('default');
  });

  it('displays Arrange with aligned all fit end fill', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/aligned-fit-end-fill-arrange');
    Terra.validates.element('aligned all fit end fill');
  });

  it('displays Arrange with aligned all fit start fill', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/aligned-fit-start-fill-arrange');
    Terra.validates.element('aligned all fit start fill');
  });

  it('displays Arrange with aligned individually fit start', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/individually-aligned-fit-start');
    Terra.validates.element('aligned individually fit start');
  });

  it('displays Arrange with aligned individually fill', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/individually-aligned-fill');
    Terra.validates.element('aligned individually fill');
  });

  it('displays Arrange with aligned individually fit end', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/individually-aligned-fit-end');
    Terra.validates.element('aligned individually fit end');
  });

  it('displays Arrange with aligned all long words', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/aligned-all-long-words');
    Terra.validates.element('aligned all long words');
  });

  it('displays Arrange with align stretch with 20% max-widths on containers using attribute props', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/arrange/aligned-stretch-max-width');
    Terra.validates.element('align stretch with 20% max-widths on containers using attribute props');
  });
});
