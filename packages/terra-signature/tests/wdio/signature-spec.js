Terra.describeViewports('Signature', ['medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/cerner-terra-core-docs/signature/signature-default');
  });

  it('should display default Signature', () => {
    Terra.validates.element('default');
  });

  it('should try to draw with right click', () => {
    $('#drawline').moveTo({ xOffset: 0, yOffset: 0 });
    browser.buttonDown(2);
    $('#drawline').moveTo({ xOffset: 90, yOffset: 90 });
    browser.buttonUp(2);

    Terra.validates.element('draw with right click');
  });

  it('should try to draw with middle click', () => {
    $('#drawline').moveTo({ xOffset: 0, yOffset: 0 });
    browser.buttonDown(1);
    $('#drawline').moveTo({ xOffset: 90, yOffset: 90 });
    browser.buttonUp(1);

    Terra.validates.element('draw with middle click');
  });

  it('should draws lines', () => {
    $('#drawline').moveTo({ xOffset: 0, yOffset: 0 });
    browser.buttonDown(0);
    $('#drawline').moveTo({ xOffset: 90, yOffset: 90 });
    browser.buttonUp(0);

    Terra.validates.element('draws lines');
  });
});
