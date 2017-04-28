import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';

const DemographicsBannerAdditionalDetails = () => (
  <DemographicsBanner
    applicationContent={<span>St. Johns Kansas City West Wing Room Cardiac Arrest Unit 253</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    dateOfBirthLabel="DOB"
    gender="Male"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    personName="Johnathon Doe"
    photo={<img alt="My Cat" src="http://lorempixel.com/50/50/animals/7/" />}
    preferredFirstName="John"
  />
);

export default DemographicsBannerAdditionalDetails;
