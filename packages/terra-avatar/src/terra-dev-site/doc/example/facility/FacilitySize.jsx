import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Facility } from 'terra-avatar/lib/AvatarVariants';
import image from '../../../assets/200x133.jpg';

const AvatarSize = () => (
  <Facility image={image} alt="Thailand" height="5em" width="5em" />
);

export default AvatarSize;
