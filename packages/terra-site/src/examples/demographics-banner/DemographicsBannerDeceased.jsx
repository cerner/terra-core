import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';

const DemographicsBannerDeceased = () => (
  <DemographicsBanner
    age="25 Years"
    dateOfBirth="May 9, 1992"
    dateOfBirthLabel="DOB"
    deceasedDate="March 12, 2017"
    deceasedDateLabel="Deceased"
    gender="True Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
    personName="Johnathon Doe"
    preferredFirstName="John"
  />
);

export default DemographicsBannerDeceased;
