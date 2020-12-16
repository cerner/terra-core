Terra.describeViewports('Profile Image', ['medium'], () => {
  it('should display default Profile Image', () => {
    browser.url('/raw/tests/terra-profile-image/profile-image/profile-image-default');

    Terra.validates.element('default');
  });

  it('should display failed Profile Image', () => {
    browser.url('/raw/tests/terra-profile-image/profile-image/profile-image-failed');

    Terra.validates.element('failed');
  });

  it('should display Profile Image with source not provided', () => {
    browser.url('/raw/tests/terra-profile-image/profile-image/profile-image-source-not-provided');

    Terra.validates.element('source not provided');
  });
});
