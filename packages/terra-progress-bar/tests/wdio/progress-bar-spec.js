/* global browser, Terra */

describe('Progress Bar Gradient', () => {
  beforeEach(() => browser.url('/#/raw/tests/progress-bar/progress-bar-gradient'));

  Terra.should.beAccessible();
  Terra.should.matchScreenshot();
});
