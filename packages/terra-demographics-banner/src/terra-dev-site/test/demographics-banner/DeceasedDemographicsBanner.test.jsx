import React from 'react';
import DemographicsBanner from '../../../DemographicsBanner';

export default () => (
  <DemographicsBanner
    id="deceased-demographics"
    applicationContent={<span className="risk-score">5%</span>}
    age="28 Years"
    dateOfBirth={{ value: 'May 9, 1993', ariaLabel: 'May 9, 1993' }}
    deceasedDate={{ value: 'March 12, 2020', ariaLabel: 'March 12, 2020' }}
    administrativeSex={{ value: 'M', ariaLabel: 'Male', isBirthSexMismatch: false }}
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
