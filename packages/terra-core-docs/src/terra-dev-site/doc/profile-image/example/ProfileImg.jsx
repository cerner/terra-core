import React from 'react';
import ProfileImage from 'terra-profile-image';
import exampleProfileImage from '../assets/150x150.jpg';

const ProfileImag = () => (
  <div>
    <ProfileImage alt="profile image for Martin Moon, photograph from space of rising star over a planet's silhouette" src={exampleProfileImage} width="75" height="75" variant="circle" aria-describedby="caption-example-1" />
  </div>
);

export default ProfileImag;
