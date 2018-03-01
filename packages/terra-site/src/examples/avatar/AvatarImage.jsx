import React from 'react';
import exampleAvatarImage from '../../assets/150x150.jpg';
import Avatar from '../../../../../packages/terra-avatar/src/Avatar';

const AvatarImage = () => (
  <Avatar ariaLabel="user" image={exampleAvatarImage} alt="placeholder" />
);

export default AvatarImage;
