import React from 'react';

import DemographicsBanner from '../../lib/DemographicsBanner';

export default () =>
  <DemographicsBanner
    additionalDetails={<span className="risk-score">5%</span>}
    age="25 Years"
    applicationContentTruncated={true}
    dateOfBirth="May 9, 1993"
    dateOfBirthLabel="DOB"
    gestationalAge="May 11, 1993"
    gestationalAgeLabel="GA"
    postMenstruralAge="May 13, 1993"
    postMenstruralAgeLabel="PMA"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
    preferredFirstName="John"
  />;
