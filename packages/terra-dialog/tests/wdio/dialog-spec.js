Terra.describeViewports('Dialog', ['tiny', 'large'], () => {
  it('displays default Dialog', () => {
    browser.url('/raw/tests/terra-dialog/dialog/default-dialog');

    Terra.validates.element('default', { selector: '#dialog' });
  });
});
