/* global browser, Terra */

describe('ToggleSectionHeader', () => {
  describe('Default', () => {
    beforeEach(() => browser.url('/#/tests/toggle-section-header-tests/default-toggle-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Open', () => {
    beforeEach(() => browser.url('/#/tests/toggle-section-header-tests/open-toggle-section-header'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
