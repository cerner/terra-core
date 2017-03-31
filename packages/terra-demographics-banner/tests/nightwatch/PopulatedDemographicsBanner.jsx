import React from 'react';

import DemographicsBanner from '../../lib/DemographicsBanner';

export default () =>
  <DemographicsBanner
    photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
    personName="Johnathon Doe"
    preferredFirstName="John"
    gender="Male"
    age="25 Years"
    dateOfBirth="May 9, 1993"
    additionalDetails={<span className="risk-score">5%</span>}
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
  />;
