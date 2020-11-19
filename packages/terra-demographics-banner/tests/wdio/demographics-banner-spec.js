Terra.describeViewports('Demographics Banner', ['tiny', 'large'], () => {
  it('displays blank Demographics Banner', () => {
    browser.url('/raw/tests/terra-demographics-banner/demographics-banner/blank-demographics-banner');

    Terra.validates.element('blank');
  });

  it('displays deceased Demographics Banner', () => {
    browser.url('/raw/tests/terra-demographics-banner/demographics-banner/deceased-demographics-banner');

    Terra.validates.element('deceased');
  });

  it('displays deceased Demographics Banner with no label', () => {
    browser.url('/raw/tests/terra-demographics-banner/demographics-banner/deceased-demographics-banner-no-label');

    Terra.validates.element('deceased - no label');
  });

  it('displays gestational age Demographics Banner with no label', () => {
    browser.url('/raw/tests/terra-demographics-banner/demographics-banner/gestational-age-demographics-banner-no-label');

    Terra.validates.element('gestational age - no label');
  });

  it('displays post menstrual Demographics Banner with no label', () => {
    browser.url('/raw/tests/terra-demographics-banner/demographics-banner/post-menstrual-age-demographics-banner-no-label');

    Terra.validates.element('post menstrual - no label');
  });

  it('displays populated Demographics Banner', () => {
    browser.url('/raw/tests/terra-demographics-banner/demographics-banner/populated-demographics-banner');

    Terra.validates.element('populated');
  });
});
