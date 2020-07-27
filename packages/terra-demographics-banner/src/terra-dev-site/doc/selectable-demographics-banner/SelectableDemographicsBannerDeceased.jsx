import React from 'react';
import Image from 'terra-image';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerDeceased = () => (
  <SelectableDemographicsBanner
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
    personName="Johnathon Doe"
    photo={<Image alt="My Cat" src={demographicsImage} />}
    preferredFirstName="John"
    // eslint-disable-next-line no-alert
    onClick={() => alert('Demographics banner clicked!')}
  />
);

export default SelectableDemographicsBannerDeceased;
