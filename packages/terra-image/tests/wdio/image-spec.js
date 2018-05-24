/* global browser, Terra, before */

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
    Terra.should.matchScreenshot('smaller than container', { selector: '#smaller' });
    Terra.should.matchScreenshot('height smaller than container', { selector: '#height-smaller' });
    Terra.should.matchScreenshot('width smaller than container', { selector: '#width-smaller' });
  });

  describe('Fluid', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-fluid'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('smaller than container', { selector: '#smaller' });
    Terra.should.matchScreenshot('height smaller than container', { selector: '#height-smaller' });
    Terra.should.matchScreenshot('width smaller than container', { selector: '#width-smaller' });
  });

  describe('Loading', () => {
    before(() => {
      browser.url('/#/tests/terra-image/image/image-loading');
      browser.waitForExist('#loadedImage', 1000);
      browser.waitForExist('#errorImage', 1000);
    });

    Terra.should.beAccessible();
    Terra.should.matchScreenshot('successful load', { selector: '#loadedImage' });
    Terra.should.matchScreenshot('failed load', { selector: '#errorImage' });
  });
});
