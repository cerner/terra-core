Terra.describeViewports('Switch', ['tiny'], () => {
  it('should display Default Switch', () => {
    browser.url('/raw/tests/terra-switch/switch/default-switch');
    Terra.validates.element('default');
  });

  it('should focus', () => {
    browser.keys('Tab');
    Terra.validates.element('focus');
  });

  it('should check on click', () => {
    browser.click('#defaultSwitch');
    Terra.validates.element('check on click');
  });

  describe('Disabled', () => {
    it('should display disabled button', () => {
      browser.url('/raw/tests/terra-switch/switch/disabled-switch');
      Terra.validates.element('disabled');
    });

    it('should not change on click', () => {
      browser.moveToObject('#disabledSwitch');
      browser.click('#disabledSwitch');
      Terra.validates.element('no change on click');
    });
  });
});

Terra.describeViewports('Switch', ['tiny', 'medium', 'large'], () => {
  it('renders switch with long label text', () => {
    browser.url('/raw/tests/terra-switch/switch/label-wrap');
    Terra.validates.element('long label text');
  });

  it('renders switch as block element', () => {
    browser.url('/raw/tests/terra-switch/switch/block-switch');
    Terra.validates.element('block');
  });
});
