Terra.describeViewports('Alert', ['tiny', 'large'], () => {
  it('displays default Alert', () => {
    browser.url('/raw/tests/terra-core-docs/alert/default-alert');
    Terra.validates.element('default');
  });

  it('displays types of Alert', () => {
    browser.url('/raw/tests/terra-core-docs/alert/alert-type');

    Terra.validates.element('types');
  });

  it('displays Alert with Wrapped Content', () => {
    browser.url('/raw/tests/terra-core-docs/alert/alert-with-wrapped-content');

    Terra.validates.element('wrapped content');
  });

  it('displays Responsive Alert', () => {
    browser.url('/raw/tests/terra-core-docs/alert/responsive-example');

    Terra.validates.element('responsive');
  });

  it('displays Alert with titles', () => {
    browser.url('/raw/tests/terra-core-docs/alert/alert-title');

    Terra.validates.element('titles');
  });

  it('displays custom Alert', () => {
    browser.url('/raw/tests/terra-core-docs/alert/custom-alert');

    Terra.validates.element('custom');
  });

  it('displays Alert with action button', () => {
    browser.url('/raw/tests/terra-core-docs/alert/alert-action-button');

    Terra.validates.element('action button');
  });

  it('should register actions', () => {
    expect($('#actionAlert')).toHaveTextContaining('clicked 0 times');
    $('#actionAlert button').click();
    expect($('#actionAlert')).toHaveTextContaining('clicked 1 times');
  });

  describe('Alert Dismissible', () => {
    it('displays dismissible Alert', () => {
      browser.url('/raw/tests/terra-core-docs/alert/alert-dismissible');

      Terra.validates.element('predismissed');
    });

    it('should dismiss', () => {
      $('#dismissibleAlert button').click();
      expect($('#dismissed').getText()).toEqual('Alert was dismissed');

      Terra.validates.element('dismissed');
    });
  });
});
