import React from 'react';
import Image from 'terra-image';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerDeceased = () => (
  <SelectableDemographicsBanner
    age={{ value: '25 Years', ariaLabel: '25 years old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    deceasedDate={{ value: 'March 12, 2017', ariaLabel: 'March 12, 2017' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    identifiers={[
      {
        label: 'MRN',
        value: '12343',
        ariaLabel: 'MRN 1 2 3 4 5',
      },
      {
        label: 'REA',
        value: '3JSDA',
        ariaLabel: 'R E A 3JSDA',
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
