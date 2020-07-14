import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';

const DemographicsBannerConfidential = () => (
  <DemographicsBanner
    applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
    age="25 Years"
    avatar={{
      alt: 'Johnathon Doe',
      color: 'neutral',
      initials: 'JD',
      isAriaHidden: true,
    }}
    dateOfBirth="May 9, 1993"
    gender="Male"
    identifiers={[
      {
        label: 'MRN',
        value: '12345',
        identifierAria: 'MRN 1 2 3 4 5',
      },
      {
        label: 'REA',
        value: '3JSDA',
        identifierAria: 'R E A 3JSDA',
      },
    ]}
    isConfidential
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default DemographicsBannerConfidential;
