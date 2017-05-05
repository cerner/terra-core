import React from 'react';

import DemographicsBanner from '../../lib/DemographicsBanner';

export default () =>
  <DemographicsBanner
    additionalDetails={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1992"
    dateOfBirthLabel="DOB"
    deceasedDate="March 12, 2017"
    deceasedDateLabel="Deceased"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />;
