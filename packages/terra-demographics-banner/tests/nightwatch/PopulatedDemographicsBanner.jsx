import React from 'react';

import DemographicsBanner from '../../lib/DemographicsBanner';

export default () =>
  <DemographicsBanner
    additionalDetails={<span className="risk-score">5%</span>}
    age="25 Years"
    applicationRows={[{ Address: '1501 Walnut St. Apt #123', City: 'Kansas City MO' }, { ZIP: 64108 }]}
    dateOfBirth="DOB: <b>May 9, 1993</b>"
    gestationalAge="GA: <b>May 11, 1993</b>"
    postMenstruralAge="PMA: <b>May 13, 1993</b>"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
    preferredFirstName="John"
  />;
