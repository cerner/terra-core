import React from 'react';
import ProfileImage from '../../../ProfileImage';
import exampleProfileImage from '../../assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <h2>Profile Image when height and width props are not provided</h2>
    <ProfileImage alt="no height or width provided" src={exampleProfileImage} />
    <ProfileImage alt="no height or width provided" src="invalid.jpg" />
  </div>
);

export default ProfileImageDefault;
