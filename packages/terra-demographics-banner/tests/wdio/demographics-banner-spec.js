const viewports = Terra.viewports('tiny', 'large');

describe('Demographics Banner', () => {
  describe('Blank', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/blank-demographics-banner'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Deceased', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/deceased-demographics-banner'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Deceased - No Label', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/deceased-demographics-banner-no-label'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Deceased - Themed', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/deceased-demographics-banner-no-label'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-demographics-banner-deceased-background-color': '#3C1362',
        '--terra-demographics-banner-deceased-color': '#f1f227',
      },
    });
  });

  describe('Gestational Age - No Label', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/gestational-age-demographics-banner-no-label'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Post Menstrual - No Label', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/post-menstrual-age-demographics-banner-no-label'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Populated', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/populated-demographics-banner'));

    Terra.it.isAccessible({ viewports });
    Terra.it.matchesScreenshot({ viewports });
  });

  describe('Themed', () => {
    before(() => browser.url('/#/raw/tests/terra-demographics-banner/demographics-banner/populated-demographics-banner'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-demographics-banner-background-color': '#f12772',
        '--terra-demographics-banner-color': '#004c76',
      },
    });
  });
});
