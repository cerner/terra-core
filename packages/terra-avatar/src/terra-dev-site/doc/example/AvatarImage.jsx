import React from 'react';
import Avatar from '../../../Avatar';
import exampleAvatarImage from '../../test/assets/150x150.jpg';

const AvatarImage = () => (
  <Avatar ariaLabel="John Doe" image={exampleAvatarImage} alt="placeholder" />
);

export default AvatarImage;
