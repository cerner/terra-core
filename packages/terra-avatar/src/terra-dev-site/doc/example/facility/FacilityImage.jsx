import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import { Facility } from 'terra-avatar/lib/index';
import image from '../../../assets/200x133.jpg';

const FacilityImage = () => (
  <Facility image={image} alt="Thailand" />
);

export default FacilityImage;
