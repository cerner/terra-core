import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerDeceased = () => (
  <DemographicsBanner
    age="25 Years"
    dateOfBirth="May 9, 1992"
    deceasedDate="March 12, 2017"
    gender="True Male"
    identifiers={[
      {
        label: 'MRN',
        value: '12343',
        identifierAria: 'MRN 1 2 3 4 5',
      },
      {
        label: 'REA',
        value: '3JSDA',
        identifierAria: 'R E A 3JSDA',
      },
    ]}
    photo={<Image alt="My Cat" src={demographicsImage} />}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default DemographicsBannerDeceased;
