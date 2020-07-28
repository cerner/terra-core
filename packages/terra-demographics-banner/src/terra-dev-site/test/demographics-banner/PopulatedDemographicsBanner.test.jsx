import React from 'react';
import Image from 'terra-image';
import DemographicsBanner from '../../../DemographicsBanner';
import demographicsImage from '../../doc/assets/demographicsCat.jpg';

export default () => (
  <DemographicsBanner
    id="populated-demographics"
    applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
    age="27 Years"
    dateOfBirth="May 9, 1993"
    gestationalAge="April 11, 2020"
    postMenstrualAge="May 13, 2020"
    gender="M"
    genderAria="Male"
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
    isConfidential
    personName="Johnathon Doe"
    photo={<Image alt="My Cat" src={demographicsImage} />}
    preferredFirstName="John"
  />
);
