import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';

const BasicDemographicsBanner = () => (
  <DemographicsBanner
    age="25 Years"
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    gender="Male"
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default BasicDemographicsBanner;
