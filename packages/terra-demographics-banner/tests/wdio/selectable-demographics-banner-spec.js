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

    it('Selectable-Tile-OnClick', () => {
      browser.click('#additionalDemographics');
    });

    Terra.it.validatesElement('selectable-tile-onclick', { selector: '#root' });

    it('Info-Button-OnClick', () => {
      browser.click('#infoButton');
    });

    Terra.it.validatesElement('info-button-onclick', { selector: '#root' });
  });
});
