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
    identifiers={[
      {
        label: 'MRN',
        value: '12343',
        ariaLabel: 'MRN 1 2 3 4 5',
      },
      {
        label: 'REA',
        value: '3JSDA',
        ariaLabel: 'R E A 3JSDA',
      },
    ]}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);
