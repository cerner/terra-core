describe('Profile Image', () => {
  before(() => browser.setViewportSize(Terra.viewports('medium')[0]));

  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-default'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Failed', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-failed'));

    Terra.it.isAccessible();
    Terra.it.matchesScreenshot();
  });

  describe('Source Not Provided', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-source-not-provided'));

    Terra.should.validateElement();
  });
});
