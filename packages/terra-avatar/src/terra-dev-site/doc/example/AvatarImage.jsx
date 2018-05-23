import React from 'react';
import Avatar from 'terra-avatar';
import exampleAvatarImage from '../../test/avatar/assets/150x150.jpg';

const AvatarImage = () => (
  <Avatar ariaLabel="John Doe" image={exampleAvatarImage} alt="placeholder" />
);

export default AvatarImage;
