import React from 'react';

import DemographicsBanner from '../../lib/DemographicsBanner';

export default () =>
  <DemographicsBanner
    personName="Johnathon Doe"
    preferredFirstName="John"
    gender="True Male"
    age="25 Years"
    dateOfBirth="May 9, 1992"
    deceasedDate="March 12, 2017"
    additionalDetails={<span className="risk-score">5%</span>}
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
  />;
