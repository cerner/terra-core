import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerWithURLProfilePhoto = () => (
  <DemographicsBanner
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
    personName="Johnathon Doe"
    preferredFirstName="John"
    photo={demographicsImage}
  />
);

export default DemographicsBannerWithURLProfilePhoto;
