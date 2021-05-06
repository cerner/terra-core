import React from 'react';
import ProfileImage from '../../../ProfileImage';
import exampleProfileImage from '../../assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <h2>Inline Profile Image</h2>
    <ProfileImage width="75" height="75" alt="inline test" src={exampleProfileImage} />
    <ProfileImage width="75" height="75" alt="inline test" src="invalid.jpg" />
  </div>
);

export default ProfileImageDefault;
