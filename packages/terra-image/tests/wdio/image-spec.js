Terra.describeViewports('Image', ['medium'], () => {
  it('should display default Image', () => {
    browser.url('/raw/tests/cerner-terra-core-docs/image/image-default');

    Terra.validates.element('default');
  });

  describe('Non Fluid', () => {
    before(() => browser.url('/raw/tests/cerner-terra-core-docs/image/image-non-fluid'));

    it('should display non fluid image', () => {
      Terra.validates.element('non-fluid smaller than container', { selector: '#smaller' });
      Terra.validates.element('non-fluid height smaller than container', { selector: '#height-smaller' });
      Terra.validates.element('non-fluid width smaller than container', { selector: '#width-smaller' });
    });
  });

  describe('Fluid', () => {
    before(() => browser.url('/#/raw/tests/cerner-terra-core-docs/image/image-fluid'));

    it('should display fluid image', () => {
      Terra.validates.element('fluid smaller than container', { selector: '#smaller' });
      Terra.validates.element('fluid height smaller than container', { selector: '#height-smaller' });
      Terra.validates.element('fluid width smaller than container', { selector: '#width-smaller' });
    });
  });

  describe('Loading', () => {
    before(() => {
      browser.url('/raw/tests/cerner-terra-core-docs/image/image-loading');
      $('#loadedImage').waitForExist();
      $('#errorImage').waitForExist();
    });

    it('should display loading Image', () => {
      Terra.validates.element('successful load', { selector: '#loadedImage' });
      Terra.validates.element('failed load', { selector: '#errorImage' });
    });
  });
});
