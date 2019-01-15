const viewports = Terra.viewports('medium');

describe('Signature', () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-signature/signature/signature-default'));

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Drawing Lines', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-signature/signature/signature-default');
      browser.waitForVisible('#drawline');

      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(0);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(0);
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Right Click does not draw lines', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-signature/signature/signature-default');
      browser.waitForVisible('#drawline');

      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(2);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(2);
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });

  describe('Middle Click does not draw lines', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-signature/signature/signature-default');
      browser.waitForVisible('#drawline');

      browser.moveToObject('#drawline', 0, 0);
      browser.buttonDown(1);
      browser.moveToObject('#drawline', 90, 90);
      browser.buttonUp(1);
    });

    Terra.should.matchScreenshot({ viewports });
    Terra.should.beAccessible({ viewports });
  });
});
