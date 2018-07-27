/* global before, browser, Terra */

describe('ToggleSectionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/terra-toggle-section-header/toggle-section-header/default-toggle-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Open', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-section-header/toggle-section-header/open-toggle-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Transparent', () => {
    before(() => browser.url('/#/raw/tests/terra-toggle-section-header/toggle-section-header/transparent-toggle-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
