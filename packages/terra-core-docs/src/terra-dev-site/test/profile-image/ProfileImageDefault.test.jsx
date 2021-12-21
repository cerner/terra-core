import React from 'react';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../../doc/profile-image/assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <ProfileImage src={exampleProfileImage} alt="successful profile image loaded" width="75" height="75" />
  </div>
);

export default ProfileImageDefault;
