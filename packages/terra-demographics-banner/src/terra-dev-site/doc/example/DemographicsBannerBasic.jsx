import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';

const BasicDemographicsBanner = () => (
  <DemographicsBanner
    age={{ value: '25 Years', ariaLabel: '25 years old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default BasicDemographicsBanner;
