Terra.describeViewports('Badge', ['tiny', 'medium'], () => {
  it('displays default Badge', () => {
    browser.url('/raw/tests/terra-badge/badge/badge-default');

    Terra.validates.element('default', { selector: '#default-badge' });
  });

  it('displays Badge with intent', () => {
    browser.url('/raw/tests/terra-badge/badge/badge-intent');

    Terra.validates.element('intent');
  });

  it('displays Badge with different sizes', () => {
    browser.url('/raw/tests/terra-badge/badge/badge-size');

    Terra.validates.element('size');
  });

  it('displays Badge with icons', () => {
    browser.url('/raw/tests/terra-badge/badge/badge-icon');
    Terra.validates.element('icons');
  });

  it('displays Badge with visually hidden text', () => {
    browser.url('/raw/tests/terra-badge/badge/badge-visually-hidden-text');
    Terra.validates.element('visually hidden text');
  });
});
