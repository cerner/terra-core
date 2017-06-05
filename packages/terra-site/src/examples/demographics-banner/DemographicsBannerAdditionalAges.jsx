import React from 'react';
import DemographicsBanner from 'terra-demographics-banner';
import Image from 'terra-image';

import demographicsImage from '../../assets/demographicsCat.jpg';

const DemographicsBannerAdditionalAges = () => (
  <DemographicsBanner
    applicationContent={<span className="risk-score">5%</span>}
    age="25 Years"
    dateOfBirth="May 9, 1993"
    dateOfBirthLabel="DOB"
    gender="Male"
    gestationalAge="April 5, 2016"
    gestationalAgeLabel="GA"
    identifiers={{ MRN: 12343, REA: '3JSDA' }}
    photo={<Image alt="My Cat" src={demographicsImage} />}
    personName="Johnathon Doe"
    postMenstrualAge="April 7, 2016"
    postMenstrualAgeLabel="PMA"
    preferredFirstName="John"
  />
);

export default DemographicsBannerAdditionalAges;
