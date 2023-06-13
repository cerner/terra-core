Terra.describeViewports('Alert', ['tiny', 'large'], () => {
  it('displays default Alert', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/alert/default-alert');
    Terra.validates.element('default');
  });

  it('displays types of Alert', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/alert/alert-type');

    Terra.validates.element('types');
  });

  it('displays Alert with Wrapped Content', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/alert/alert-with-wrapped-content');

    Terra.validates.element('wrapped content');
  });

  it('displays Responsive Alert', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/alert/responsive-example');

    Terra.validates.element('responsive');
  });

  it('displays Alert with titles', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/alert/alert-title');

    Terra.validates.element('titles');
  });

  it('displays custom Alert', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/alert/custom-alert');

    Terra.validates.element('custom');
  });

  it('displays Alert with action button', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/alert/alert-action-button');

    Terra.validates.element('action button');
  });

  it('should register actions', () => {
    expect($('#actionAlert')).toHaveTextContaining('clicked 0 times');
    $('#actionAlert button').click();
    expect($('#actionAlert')).toHaveTextContaining('clicked 1 times');
  });

  describe('Alert Dismissible', () => {
    it('displays dismissible Alert', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/alert/alert-dismissible');

      Terra.validates.element('predismissed');
    });

    it('should dismiss', () => {
      $('#dismissibleAlert button').click();
      expect($('#dismissed').getText()).toEqual('Alert was dismissed');

      Terra.validates.element('dismissed');
    });
  });

  describe('Critical alert notification banner', () => {
    it('alert content is focused when rendered with an action element and dismiss', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/alert/custom-prop-alert');
      browser.keys(['Tab', 'Tab', 'Tab', 'Tab', 'Enter']);

      Terra.validates.element('alert focused with action and dismiss');
    });

    it('alert content is focused when rendered with only action element', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/alert/custom-prop-alert');
      browser.keys(['Tab', 'Tab', 'Tab', 'Down arrow', 'Down arrow', 'Down arrow', 'Down arrow', 'Down arrow', 'Down arrow', 'Enter', 'Escape', 'Tab', 'Enter']);

      Terra.validates.element('alert focused with action');
    });

    it('alert content is focused when rendered with only dismiss', () => {
      browser.url('/raw/tests/cerner-terra-core-docs/alert/custom-prop-alert');
      browser.keys(['Tab', 'Tab', 'Tab', 'Down arrow', 'Enter', 'Escape', 'Tab', 'Enter']);

      Terra.validates.element('alert focused with dismiss');
    });
  });

  describe('Alert Long Text', () => {
    it('wraps naturally at high magnification', () => {
      browser.setWindowRect(0, 0, 100, 800);
      browser.url('/raw/tests/cerner-terra-core-docs/alert/long-text-alert');

      Terra.validates.element('text wrapping');
    });
  });
});
