import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerAdditionalAges = () => (
  <DemographicsBanner
    applicationContent={<span className="risk-score">5%</span>}
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
    photo={<Image alt="My Cat" src={demographicsImage} />}
    personName="Johnathon Doe"
    postMenstrualAge={{ value: '43 Weeks', ariaLabel: '43 Weeks' }}
    preferredFirstName="John"
  />
);

export default DemographicsBannerAdditionalAges;
