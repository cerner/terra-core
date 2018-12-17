import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Avatar from 'terra-avatar/lib/index';
import exampleAvatarImage from '../../../assets/150x150.jpg';

const AvatarSize = () => (
  <Avatar alt="User" image={exampleAvatarImage} size="2em" />
);

export default AvatarSize;
