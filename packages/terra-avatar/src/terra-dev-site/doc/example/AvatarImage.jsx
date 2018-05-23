import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Avatar from 'terra-avatar/lib/Avatar';
import exampleAvatarImage from '../../assets/150x150.jpg';

const AvatarImage = () => (
  <Avatar ariaLabel="John Doe" image={exampleAvatarImage} alt="placeholder" />
);

export default AvatarImage;
