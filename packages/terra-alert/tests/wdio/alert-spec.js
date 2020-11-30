Terra.describeViewports('Alert', ['tiny', 'large'], () => {
  it('displays default Alert', () => {
    browser.url('/raw/tests/terra-alert/alert/default-alert');
    Terra.validates.element('default');
  });

  it('displays types of Alert', () => {
    browser.url('/raw/tests/terra-alert/alert/alert-type');

    Terra.validates.element('types');
  });

  it('displays Alert with Wrapped Content', () => {
    browser.url('/raw/tests/terra-alert/alert/alert-with-wrapped-content');

    Terra.validates.element('wrapped content');
  });

  it('displays Responsive Alert', () => {
    browser.url('/raw/tests/terra-alert/alert/responsive-example');

    Terra.validates.element('responsive');
  });

  it('displays Alert with titles', () => {
    browser.url('/raw/tests/terra-alert/alert/alert-title');

    Terra.validates.element('titles');
  });

  it('displays custom Alert', () => {
    browser.url('/raw/tests/terra-alert/alert/custom-alert');

    Terra.validates.element('custom');
  });

  it('displays Alert with action button', () => {
    browser.url('/raw/tests/terra-alert/alert/alert-action-button');

    Terra.validates.element('action button');
  });

  it('should register actions', () => {
    expect(browser.getText('#actionAlert')).to.have.string('clicked 0 times');
    browser.click('#actionAlert button');
    expect(browser.getText('#actionAlert')).to.have.string('clicked 1 times');
  });

  describe('Alert Dismissible', () => {
    it('displays dismissible Alert', () => {
      browser.url('/raw/tests/terra-alert/alert/alert-dismissible');

      Terra.validates.element('default');
    });

    it('should dismiss', () => {
      browser.click('#dismissibleAlert button');
      expect(browser.getText('#dismissed')).to.equal('Alert was dismissed');

      Terra.validates.element('dismissed');
    });
  });
});
