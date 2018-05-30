import React from 'react';
import Image from 'terra-image';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DemographicsBanner from 'terra-demographics-banner/lib/DemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerDeceased = () => (
  <DemographicsBanner
    age="25 Years"
    dateOfBirth="May 9, 1992"
    deceasedDate="March 12, 2017"
    gender="True Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    photo={<Image alt="My Cat" src={demographicsImage} />}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default DemographicsBannerDeceased;
