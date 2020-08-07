import React from 'react';
import SelectableDemographicsBanner from 'terra-demographics-banner/lib/SelectableDemographicsBanner';

const DefaultSelectableDemographicsBanner = () => (
  <SelectableDemographicsBanner
    age={{ value: '25 Years', ariaLabel: '25 years old.' }}
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    administrativeSex={{ value: 'Male', ariaLabel: 'Male', isBirthSexMismatch: false }}
    personName="Johnathon Doe"
    preferredFirstName="John"
    // eslint-disable-next-line no-alert
    onClick={() => alert('Demographics banner clicked!')}
  />
);

export default DefaultSelectableDemographicsBanner;
