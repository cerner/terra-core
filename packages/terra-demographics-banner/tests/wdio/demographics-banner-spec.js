/* global browser, Terra */
const viewports = Terra.viewports('tiny', 'large');

describe('Demographics Banner', () => {
  describe('Blank', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/blank-demographics-banner'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Deceased', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/deceased-demographics-banner'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Deceased - No Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/deceased-demographics-banner-no-label'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Deceased - Themed', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/deceased-demographics-banner-no-label'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-demographics-banner-background-deceased': '#3C1362',
        '--terra-demographics-banner-foreground-deceased': '#f1f227',
      },
    });
  });

  describe('Gestational Age - No Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/gestational-age-demographics-banner-no-label'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Post Menstrual - No Label', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/post-menstrual-age-demographics-banner-no-label'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Populated', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/populated-demographics-banner'));

    Terra.should.beAccessible({ viewports });
    Terra.should.matchScreenshot({ viewports });
  });

  describe('Themed', () => {
    beforeEach(() => browser.url('/#/raw/tests/demographics-banner/populated-demographics-banner'));

    Terra.should.themeCombinationOfCustomProperties({
      testName: 'themed',
      properties: {
        '--terra-demographics-banner-background': '#f12772',
        '--terra-demographics-banner-foreground': '#004c76',
      },
    });
  });
});
