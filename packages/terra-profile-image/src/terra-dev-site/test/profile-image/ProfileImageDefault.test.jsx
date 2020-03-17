import React from 'react';
import ProfileImage from '../../../ProfileImage';
import exampleProfileImage from '../../assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <h2>Successful Profile Image</h2>
    <ProfileImage src={exampleProfileImage} alt="profile image loaded" width="75" height="75" />
  </div>
);

export default ProfileImageDefault;
