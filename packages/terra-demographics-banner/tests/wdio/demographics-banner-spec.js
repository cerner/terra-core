Terra.describeViewports('Demographics Banner', ['tiny', 'large'], () => {
  describe('Blank', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/blank-demographics-banner'));

    Terra.it.validatesElement();
  });

  describe('Deceased', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/deceased-demographics-banner'));

    Terra.it.validatesElement();
  });

  describe('Deceased - No Label', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/deceased-demographics-banner-no-label'));

    Terra.it.validatesElement();
  });

  describe('Gestational Age - No Label', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/gestational-age-demographics-banner-no-label'));

    Terra.it.validatesElement();
  });

  describe('Post Menstrual - No Label', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/post-menstrual-age-demographics-banner-no-label'));

    Terra.it.validatesElement();
  });

  describe('Populated', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/populated-demographics-banner'));

    Terra.it.validatesElement();
  });
});
