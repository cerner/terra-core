import React from 'react';
import Avatar from 'terra-avatar';
import exampleAvatarImage from '../../../assets/150x150.jpg';

const AvatarSize = () => (
  <Avatar alt="User" image={exampleAvatarImage} size="2em" initials="JS" />
);

export default AvatarSize;
