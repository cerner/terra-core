import React from 'react';
import Image from 'terra-image';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';
import demographicsImage from '../assets/demographicsCat.jpg';

const SelectableDemographicsBannerAdditionalAges = () => (
  <SelectableDemographicsBanner
    applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
    age={{ value: '10 Weeks', ariaLabel: '10 weeks old.' }}
    dateOfBirth={{ value: 'October 25, 2018', ariaLabel: 'October 25, 2018' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    gestationalAge={{ value: '33 Weeks', ariaLabel: '33 Weeks' }}
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
    postMenstrualAge={{ value: '43 Weeks', ariaLabel: '43 Weeks' }}
    preferredFirstName="John"
    // eslint-disable-next-line no-alert
    onClick={() => alert('Demographics banner clicked!')}
  />
);

export default SelectableDemographicsBannerAdditionalAges;
