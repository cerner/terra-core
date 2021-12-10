import React from 'react';
import ProfileImage from 'terra-profile-image';

const ProfileImageFailed = () => (
  <div>
    <ProfileImage src="invalid.jpg" alt="could not load profile image" width="75" height="75" />
  </div>
);

export default ProfileImageFailed;
