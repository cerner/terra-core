Terra.describeViewports('Profile Image', ['medium'], () => {
  describe('Default', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-default'));

    Terra.it.validatesElement();
  });

  describe('Failed', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-failed'));

    Terra.it.validatesElement();
  });

  describe('Source Not Provided', () => {
    before(() => browser.url('/#/raw/tests/terra-profile-image/profile-image/profile-image-source-not-provided'));

    Terra.it.validatesElement();
  });
});
