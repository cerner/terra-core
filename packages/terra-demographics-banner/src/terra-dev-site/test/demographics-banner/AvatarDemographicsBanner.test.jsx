import React from 'react';
import DemographicsBanner from '../../../DemographicsBanner';
import demographicsImage from '../../doc/assets/demographicsCat.jpg';

export default () => (
  <DemographicsBanner
    id="populated-demographics"
    applicationContent={<span>St. Johns West Wing Room Cardiac Unit 253</span>}
    age="25 Years"
    avatar={{
      alt: 'Johnathon Doe',
      color: 'neutral',
      image: demographicsImage,
      initials: 'JD',
      isAriaHidden: true,
    }}
    dateOfBirth="May 9, 1993"
    gestationalAge="May 11, 1993"
    postMenstrualAge="May 13, 1993"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    isConfidential
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);
