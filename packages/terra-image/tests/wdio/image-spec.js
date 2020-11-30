Terra.describeViewports('Image', ['medium'], () => {
  it('should display default Image', () => {
    browser.url('/raw/tests/terra-image/image/image-default');

    Terra.validates.element('default');
  });

  describe('Non Fluid', () => {
    before(() => browser.url('/raw/tests/terra-image/image/image-non-fluid'));

    it('should display non fluid image', () => {
      Terra.validates.element('smaller than container', { selector: '#smaller' });
      Terra.validates.element('height smaller than container', { selector: '#height-smaller' });
      Terra.validates.element('width smaller than container', { selector: '#width-smaller' });
    });
  });

  describe('Fluid', () => {
    before(() => browser.url('/#/raw/tests/terra-image/image/image-fluid'));

    it('should display non fluid image', () => {
      Terra.validates.element('smaller than container', { selector: '#smaller' });
      Terra.validates.element('height smaller than container', { selector: '#height-smaller' });
      Terra.validates.element('width smaller than container', { selector: '#width-smaller' });
    });
  });

  describe('Loading', () => {
    before(() => {
      browser.url('/raw/tests/terra-image/image/image-loading');
      browser.waitForExist('#loadedImage');
      browser.waitForExist('#errorImage');
    });

    it('should display loading Image', () => {
      Terra.validates.element('successful load', { selector: '#loadedImage' });
      Terra.validates.element('failed load', { selector: '#errorImage' });
    });
  });
});
