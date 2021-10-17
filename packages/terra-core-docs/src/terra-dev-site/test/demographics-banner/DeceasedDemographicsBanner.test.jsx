import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';

export default () => (
  <DemographicsBanner
    id="deceased-demographics"
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1992"
    deceasedDate="March 12, 2017"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);
