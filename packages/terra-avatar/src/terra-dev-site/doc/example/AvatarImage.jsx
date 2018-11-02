import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Avatar } from 'terra-avatar/lib/AvatarVariants';
import exampleAvatarImage from '../../assets/150x150.jpg';

const AvatarImage = () => (
  <Avatar image={exampleAvatarImage} alt="Deep Space" />
);

export default AvatarImage;
