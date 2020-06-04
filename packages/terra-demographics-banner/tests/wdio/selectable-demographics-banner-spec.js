Terra.describeViewports('Selectable Demographics Banner', ['tiny', 'large'], () => {
  describe('Blank', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/selectable-demographics-banner/blank-selectable-demographics-banner'));

    Terra.it.validatesElement();
  });

  describe('Deceased', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/selectable-demographics-banner/deceased-selectable-demographics-banner'));

    Terra.it.validatesElement();
  });

  describe('Gestational Age', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/selectable-demographics-banner/gestational-age-selectable-demographics-banner'));

    Terra.it.validatesElement();
  });

  describe('Post Menstrual Age', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/selectable-demographics-banner/post-menstrual-selectable-demographics-banner'));

    Terra.it.validatesElement();
  });

  describe('Populated', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/selectable-demographics-banner/populated-selectable-demographics-banner'));

    Terra.it.validatesElement();

    it('click banner', () => {
      browser.click('#populated-demographics-banner');
    });

    Terra.it.validatesElement('banner clicked', { selector: '#root' });
  });

  describe('Keyboard Focus', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/selectable-demographics-banner/populated-selectable-demographics-banner'));

    Terra.it.validatesElement();

    it('tab 3 times to set focus on banner', () => {
      browser.keys('Tab');
      browser.keys('Tab');
      browser.keys('Tab');
    });

    Terra.it.validatesElement('focus style', { selector: '#root' });
  });
});
