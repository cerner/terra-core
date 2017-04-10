import React from 'react';

import DemographicsBanner from '../../lib/DemographicsBanner';

export default () =>
  <DemographicsBanner
    additionalDetails={<span className="risk-score">5%</span>}
    age="25 Years"
    applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
    dateOfBirth="DOB: <b>May 9, 1992</b>"
    deceasedDate="Deceased: <b>March 12, 2017</b>"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />;
