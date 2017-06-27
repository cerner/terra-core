import React from 'react';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../../assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <h2>Default</h2>
    <ProfileImage src={exampleProfileImage} variant="rounded" width="75" height="75" />
    <h2>Failed Profile Image</h2>
    <ProfileImage src="invalid.jpg" variant="rounded" width="75" height="75" />
  </div>
);

export default ProfileImageDefault;
