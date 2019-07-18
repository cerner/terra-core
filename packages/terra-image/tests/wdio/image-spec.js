Terra.describeViewports('Image', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-default'));

    Terra.it.validatesElement();
  });

  describe('Non Fluid', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-non-fluid'));

    Terra.it.validatesElement('smaller than container', { selector: '#smaller' });
    Terra.it.matchesScreenshot('height smaller than container', { selector: '#height-smaller' });
    Terra.it.matchesScreenshot('width smaller than container', { selector: '#width-smaller' });
  });

  describe('Fluid', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-fluid'));

    Terra.it.validatesElement('smaller than container', { selector: '#smaller' });
    Terra.it.matchesScreenshot('height smaller than container', { selector: '#height-smaller' });
    Terra.it.matchesScreenshot('width smaller than container', { selector: '#width-smaller' });
  });

  describe('Loading', () => {
    before(() => {
      browser.url('/#/raw/tests/terra-image/image/image-loading');
      browser.waitForExist('#loadedImage');
      browser.waitForExist('#errorImage');
    });

    Terra.it.validatesElement('successful load', { selector: '#loadedImage' });
    Terra.it.matchesScreenshot('failed load', { selector: '#errorImage' });
  });
});
