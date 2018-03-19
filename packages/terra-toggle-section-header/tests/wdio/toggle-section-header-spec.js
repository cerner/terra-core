/* global browser, Terra */

describe('ToggleSectionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/raw/tests/toggle-section-header/default-toggle-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Open', () => {
    beforeEach(() => browser.url('/#/raw/tests/toggle-section-header/open-toggle-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
