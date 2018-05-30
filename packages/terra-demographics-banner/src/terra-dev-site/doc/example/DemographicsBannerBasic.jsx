import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import DemographicsBanner from 'terra-demographics-banner/lib/DemographicsBanner';

const BasicDemographicsBanner = () => (
  <DemographicsBanner
    age="25 Years"
    dateOfBirth="May 9, 1993"
    gender="Male"
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default BasicDemographicsBanner;
