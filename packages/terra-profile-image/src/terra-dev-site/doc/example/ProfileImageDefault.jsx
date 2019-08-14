import React from 'react';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from 'terra-profile-image/lib/terra-dev-site/doc/example/150x150.jpg';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const ProfileImageDefault = () => (
  <div>
    <h2>Successful Profile Image</h2>
    <ProfileImage alt="profile image" src={exampleProfileImage} width="75" height="75" />
    <br />
    <h2>Failed Profile Image</h2>
    <ProfileImage alt="profile image" src="invalid.jpg" width="75" height="75" />
  </div>
);

export default ProfileImageDefault;
