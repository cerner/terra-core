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
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    isConfidential
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default DemographicsBannerConfidential;
