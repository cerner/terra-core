import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import demographicsImage from '../assets/demographicsCat.jpg';

const DemographicsBannerAdditionalAges = () => (
  <DemographicsBanner
    applicationContent={<span className="risk-score">5%</span>}
    age="10 Weeks"
    avatar={{
      alt: 'Johnathon Doe',
      color: 'neutral',
      image: demographicsImage,
      initials: 'JD',
      isAriaHidden: true,
    }}
    dateOfBirth="October 25, 2018"
    gender="Male"
    gestationalAge="33 Weeks"
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
    postMenstrualAge="43 Weeks"
    preferredFirstName="John"
  />
);

export default DemographicsBannerAdditionalAges;
