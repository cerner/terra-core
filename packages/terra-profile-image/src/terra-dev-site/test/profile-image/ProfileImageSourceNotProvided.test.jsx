import React from 'react';
import ProfileImage from '../../../ProfileImage';

const ProfileImageSourceNotProvided = () => (
  <div>
    <h2>Profile Image when source is not provided</h2>
    <ProfileImage src="" alt="could not load profile image" width="75" height="75" />
  </div>
);

export default ProfileImageSourceNotProvided;
