Terra.describeViewports('Signature', ['medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-signature/signature/signature-default');
  });

  it('should display default Signature', () => {
    Terra.validates.element('default');
  });

  it('should try to draw with right click', () => {
    browser.moveToObject('#drawline', 0, 0);
    browser.buttonDown(2);
    browser.moveToObject('#drawline', 90, 90);
    browser.buttonUp(2);

    Terra.validates.element('draw with right click');
  });

  it('should try to draw with middle click', () => {
    browser.moveToObject('#drawline', 0, 0);
    browser.buttonDown(1);
    browser.moveToObject('#drawline', 90, 90);
    browser.buttonUp(1);

    Terra.validates.element('draw with middle click');
  });

  it('should draws lines', () => {
    browser.moveToObject('#drawline', 0, 0);
    browser.buttonDown(0);
    browser.moveToObject('#drawline', 90, 90);
    browser.buttonUp(0);

    Terra.validates.element('draws lines');
  });
});
