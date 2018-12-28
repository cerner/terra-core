describe('Image', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Non Fluid', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-non-fluid'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('smaller than container', { selector: '[id=smaller]' });
    Terra.should.matchScreenshot('height smaller than container', { selector: '[id=height-smaller]' });
    Terra.should.matchScreenshot('width smaller than container', { selector: '[id=width-smaller]' });
  });

  describe('Fluid', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-fluid'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('smaller than container', { selector: '[id=smaller]' });
    Terra.should.matchScreenshot('height smaller than container', { selector: '[id=height-smaller]' });
    Terra.should.matchScreenshot('width smaller than container', { selector: '[id=width-smaller]' });
  });

  describe('Loading', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-image/image/image-loading');
      browser.waitForExist('[id=loadedImage]');
      browser.waitForExist('[id=errorImage]');
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('successful load', { selector: '[id=loadedImage]' });
    Terra.should.matchScreenshot('failed load', { selector: '[id=errorImage]' });
  });
});
