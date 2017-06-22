import React from 'react';
import Image from 'terra-image';
import ProfileImage from 'terra-profile-image';
import placeholderPic150x150 from '../../assets/150x150.jpg';

const ProfileImageDefault = () => (
  <div>
    <h2>Default</h2>
    <ProfileImage image={<Image src={placeholderPic150x150} variant="rounded" width="75" height="75" />} />
    <h2>Failed Profile Image</h2>
    <ProfileImage image={<Image src="invalid.jpg" variant="rounded" width="75" height="75" />} />
  </div>
);

export default ProfileImageDefault;
