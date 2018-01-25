import React from 'react';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../../assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <h2>Successful Profile Image</h2>
    <ProfileImage src={exampleProfileImage} width="75" height="75" />
    <br />
    <h2>Failed Profile Image</h2>
    <ProfileImage src="invalid.jpg" width="75" height="75" />
  </div>
);

export default ProfileImageDefault;
