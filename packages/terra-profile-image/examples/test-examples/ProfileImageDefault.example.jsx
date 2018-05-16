import React from 'react';
import ProfileImage from '../../lib/ProfileImage';
import exampleProfileImage from '../../tests/assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <h2>Successful Profile Image</h2>
    <ProfileImage src={exampleProfileImage} alt="profile image loaded" width="75" height="75" />
  </div>
);

export default ProfileImageDefault;
