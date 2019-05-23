describe('Signature', () => {
  before(() => {
    browser.url('/#/raw/tests/terra-signature/signature/signature-default');
    browser.setViewportSize(Terra.viewports('medium')[0]);
  });

  describe('Default', () => {
    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Right Click does not draw lines', () => {
    it('tries to draw with right click', () => {
      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(2);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(2);
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Middle Click does not draw lines', () => {
    it('tries to draw with middle click', () => {
      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(1);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(1);
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });

  describe('Drawing Lines', () => {
    it('draws lines', () => {
      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(0);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(0);
    });

    Terra.should.matchScreenshot();
    Terra.should.beAccessible();
  });
});
