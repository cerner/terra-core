import React from 'react';
import DemographicsBanner from '../../../DemographicsBanner';

export default () => (
  <DemographicsBanner
    id="deceased-demographics"
    applicationContent={<span className="risk-score">5%</span>}
    age="28 Years"
    dateOfBirth="May 9, 1992"
    deceasedDate="March 12, 2020"
    gender="M"
    genderAria="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);
