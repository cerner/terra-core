Terra.describeViewports('Signature', ['medium'], () => {
  before(() => {
    browser.url('/#/raw/tests/terra-signature/signature/signature-default');
  });

  describe('Default', () => {
    Terra.it.validatesElement();
  });

  describe('Right Click does not draw lines', () => {
    it('tries to draw with right click', () => {
      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(2);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(2);
    });

    Terra.it.validatesElement();
  });

  describe('Middle Click does not draw lines', () => {
    it('tries to draw with middle click', () => {
      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(1);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(1);
    });

    Terra.it.validatesElement();
  });

  describe('Drawing Lines', () => {
    it('draws lines', () => {
      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(0);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(0);
    });

    Terra.it.validatesElement();
  });
});
