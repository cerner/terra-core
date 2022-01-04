import React from 'react';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../../doc/profile-image/assets/150x150.jpg';

const ProfileImageWhenHeightAndWidthPropsAreNotProvided = () => (
  <div>
    <ProfileImage alt="profile image when height and width props are not provided, valid image" src={exampleProfileImage} />
    &nbsp;
    &nbsp;
    <ProfileImage alt="profile image when height and width props are not provided, invalid image" src="invalid.jpg" />
  </div>
);

export default ProfileImageWhenHeightAndWidthPropsAreNotProvided;
