/* global browser, Terra, before */

describe('Profile Image', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/profile-image/profile-image-default'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });

  describe('Failed', () => {
    before(() => browser.url('/#/raw/tests/profile-image/profile-image-failed'));

    Terra.should.beAccessible();
    Terra.should.matchScreenshot();
  });
});
