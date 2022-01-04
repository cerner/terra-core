Terra.describeViewports('StatusView', ['tiny', 'medium'], () => {
  it('Displays an error status view with all props given', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-error-all-props');
    Terra.validates.element('error with all props');
  });

  it('Displays an error status view with the glyph being hidden', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-glyph-hidden');
    Terra.validates.element('error with glyph hidden');
  });

  it('Displays a no-data status view with the content centered in its container', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-center');
    Terra.validates.element('no data');
  });

  it('Displays a no-matching-results status view with the content aligned at the top in its container', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-align-top');
    Terra.validates.element('no matching results');
  });

  it('Displays a not-authorized status view', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-not-authorized');
    Terra.validates.element('not authorized');
  });

  it('Displays a custom status view', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-custom');
    Terra.validates.element('custom');
  });

  it('Displays an error status view that displays wrapping text', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-text-wrapping');
    Terra.validates.element('error with wrapping text');
  });
});

Terra.describeViewports('StatusView', ['medium'], () => {
  it('Displays an error status view that is too thin for a glyph', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-thin-constraint');
    Terra.validates.element('error too thin for glyph');
  });

  it('Overflows correctly when the container height is constrained', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/status-view/status-view-overflow');
    // eslint-disable-next-line prefer-arrow-callback
    $('p[class*="title"]').scrollIntoView();
    Terra.validates.element('scrolled', { selector: '#statusView' });
  });
});
